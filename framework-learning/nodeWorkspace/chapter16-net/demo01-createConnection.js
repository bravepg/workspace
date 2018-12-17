/*
* @Author: gaopeng
* @Email:  gaopeng_hdu@163.com
* @Date:   2018-05-06 21:14:33
* @Last Modified by:   gaopeng
* @Last Modified time: 2018-07-27 14:06:41
*/

'use strict';

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