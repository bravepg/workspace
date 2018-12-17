/*
* @Author: gaopeng
* @Email:  gaopeng_hdu@163.com
* @Date:   2018-05-06 21:29:09
* @Last Modified by:   gaopeng
* @Last Modified time: 2018-05-06 21:33:56
*/

'use strict';

const net = require('net');
// 注释的这种写法跟下面的一致
// const server = net.createServer((socket) => {
//   socket.pipe(process.stdout);
//   socket.write('data from server');
// });

const server = net.createServer();
server.on('connection', (socket) => {
	socket.pipe(process.stdout);
  	socket.write('data from server');
});

server.listen(3000, () => {
	console.log(`server is on ${JSON.stringify(server.address())}`);
});