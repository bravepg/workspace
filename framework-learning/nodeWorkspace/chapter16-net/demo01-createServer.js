/*
* @Author: gaopeng
* @Email:  gaopeng_hdu@163.com
* @Date:   2018-05-06 15:10:27
* @Last Modified by:   gaopeng
* @Last Modified time: 2018-07-27 14:07:51
*/

'use strict';

const net = require('net');

// server 本身是一个EmitterEvent
// createServer 中的函数是一个监听器
// 为 connection 事件绑定的监听器
// 一旦有新的连接，就会触发 connection 事件
const server = net.createServer((c) => {
	// 'connection' listener
	console.log('client connected');

	c.on('end', () => {
		console.log('client disconnected');
	});

	c.write('hello\r\n');

	c.on('data', (data) => {
		console.log('client send ' + data.toString());
	});

	// 接收客户端的数据然后pipe进入写入流
  	c.pipe(c);
  	// 等同于
  	// c.on('data', (data) => {
		// c.write(data);
	// });
});

server.on('error', (err) => {
  	throw err;
});
server.listen(8124, () => {
  	console.log('server bound');
});