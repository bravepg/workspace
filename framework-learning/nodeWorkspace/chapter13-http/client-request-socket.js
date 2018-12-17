/*
* @Author: gaopeng
* @Email:  gaopeng_hdu@163.com
* @Date:   2018-07-28 13:26:37
* @Last Modified by:   gaopeng
* @Last Modified time: 2018-07-28 13:27:46
*/

'use strict';
const http = require('http');
const options = {
  	host: 'nodejs.cn',
};
const req = http.get(options);
req.end();
console.log('req.socket', req.socket);   // end后，该值变成null
req.once('response', (res) => {
  	const ip = req.socket.localAddress;
  	const port = req.socket.localPort;
  	console.log(`你的IP地址是 ${ip}，你的源端口是 ${port}。`);
  	// consume response object
});