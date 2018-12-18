// 客户端client本身是可读可写流

const net = require('net');

const client = net.createConnection({ port: 8124 }, () => {
	//'connect' listener
  console.log('connected to server!');

  // 向服务端写数据
  client.write('world!\r\n');
});

client.on('data', (data) => {
	console.log(data.toString());
	client.end();
});
client.on('end', () => {
  	console.log('disconnected from server');
});