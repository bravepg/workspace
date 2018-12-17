/*
* @Author: gaopeng
* @Email:  gaopeng_hdu@163.com
* @Date:   2018-05-06 15:27:44
* @Last Modified by:   gaopeng
* @Last Modified time: 2018-05-06 15:32:12
*/

'use strict';

const net = require('net');

const server = new net.Server((socket) => {
  socket.end('goodbye\n');
}).on('error', (err) => {
  // handle errors here
  throw err;
});

// grab an arbitrary unused port.
server.listen(() => {
  console.log('opened server on', server.address());
});