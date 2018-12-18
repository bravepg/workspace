const http = require('http');
const net = require('net');
const url = require('url');

// 创建一个 HTTP 代理服务器
const proxy = http.createServer((req, res) => {
  	res.writeHead(200, { 'Content-Type': 'text/plain' });
  	res.end('okay');
});

proxy.on('connect', (req, cltSocket, head) => {
	console.log('req.headers', req.headers);
	// 连接到一个服务器
  	const srvUrl = url.parse(`http://${req.url}`);
  	console.log(srvUrl);
  	cltSocket.setEncoding('utf-8');
  	// 用来获取 socket 上被发送到真实服务器的数据
  	cltSocket.on('data', (data) => {
  		console.log('data', data)
  	});
  	const srvSocket = net.connect(srvUrl.port, srvUrl.hostname, () => {
  		cltSocket.write('HTTP/1.1 200 Connection Established\r\n' +
                    'Proxy-agent: Node.js-Proxy\r\n' +
                    '\r\n');
  		// 向真正的服务端写数据
  		srvSocket.write(head);
  		// 代理服务器和真实服务器交换数据
    	srvSocket.pipe(cltSocket);
    	cltSocket.pipe(srvSocket);
  	});

  	// 代理服务器收到的是从真实服务器获取的数据
  	srvSocket.setEncoding('utf-8');
  	srvSocket.on('data', (data) => {
  		// console.log('srvSocket', data);
  	})
});

// 代理服务器正在运行
proxy.listen(1337, '127.0.0.1', () => {
	// 发送一个请求到代理服务器
  	const options = {
    	port: 1337,
    	hostname: '127.0.0.1',
    	method: 'CONNECT',
    	path: 'www.baidu.com:80'
  	};

  	const req = http.request(options);
  	req.end();

  	req.on('connect', (res, socket, head) => {
  		console.log('已连接！');
  		console.log('res.headers', res.headers)
  		// 通过代理服务器发送一个请求
  		// 写入数据 服务端的socket会接收到
    	socket.write('GET / HTTP/1.1\r\n' +
                 'Host: www.baidu.com:80\r\n' +
                 'Connection: close\r\n' +
                 '\r\n');
    	socket.on('data', (chunk) => {
      		// console.log('chunk\r\n', chunk.toString());
    	});
    	socket.on('end', () => {
    		console.log('proxy end')
      		proxy.close();
   	 	});
  	});
});