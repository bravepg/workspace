const http = require('http');
const querystring = require('querystring');

const postData = querystring.stringify({
	'msg' : 'Hello World!'
});

const options = {
	hostname: 'www.baidu.com',
	port: 80,
	path: '/upload',
	method: 'POST',
	headers: {
		'Content-Type': 'application/x-www-form-urlencoded',
    	'Content-Length': Buffer.byteLength(postData)
    }
};

// 它的callback会被添加到 'response' 事件
// 因此res参数是一个http.IncomingMessage 可读流
const req = http.request(options, (res) => {
	console.log(`状态码: ${res.statusCode}`);
  	console.log(`响应头: ${JSON.stringify(res.headers)}`);
  	// res是 http.IncomingMessage
  	res.setEncoding('utf8');
  	res.on('data', (data) => {
  		console.log(data);
  	})
  	res.on('end', () => {
    	console.log('响应中已无数据。');
  	});
});

req.on('error', (e) => {
 	console.error(`请求遇到问题: ${e.message}`);
});

// 写入数据到请求主体
req.write(postData);
// 使用http.request()必须总是调用 req.end() 来表明请求的结束
req.end();