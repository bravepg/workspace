/*
* @Author: gaopeng
* @Email:  gaopeng_hdu@163.com
* @Date:   2018-08-11 14:05:24
* @Last Modified by:   gaopeng
* @Last Modified time: 2018-08-11 14:10:20
*/

'use strict';
// const cp = require('child_process');
// const n = cp.fork(`${__dirname}/subprocess.js`);

// n.on('message', (m) => {
//   	console.log('父进程收到消息：', m);
// });

// // Causes the child to print: CHILD got message: { hello: 'world' }
// n.send({ hello: 'world' });

const subprocess = require('child_process').fork('subprocess.js');

// 开启 server 对象，并发送该句柄。
const server = require('net').createServer();
server.on('connection', (socket) => {
  	socket.end('被父进程处理');
});
server.listen(1337, () => {
  	subprocess.send('server', server);
});