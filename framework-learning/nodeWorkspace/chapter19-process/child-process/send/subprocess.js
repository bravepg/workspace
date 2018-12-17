/*
* @Author: gaopeng
* @Email:  gaopeng_hdu@163.com
* @Date:   2018-08-11 14:06:44
* @Last Modified by:   gaopeng
* @Last Modified time: 2018-08-11 14:10:28
*/

'use strict';

// process.on('message', (m) => {
//   	console.log('子进程收到消息：', m);
// });

// // Causes the parent to print: PARENT got message: { foo: 'bar', baz: null }
// process.send({ foo: 'bar', baz: NaN });

process.on('message', (m, server) => {
  if (m === 'server') {
    server.on('connection', (socket) => {
      socket.end('被子进程处理');
    });
  }
});