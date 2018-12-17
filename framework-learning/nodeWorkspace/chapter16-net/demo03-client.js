/*
* @Author: gaopeng
* @Email:  gaopeng_hdu@163.com
* @Date:   2018-05-06 21:31:29
* @Last Modified by:   gaopeng
* @Last Modified time: 2018-05-06 21:32:16
*/

'use strict';

const net = require('net');
const client = net.connect({port: 3000});

client.on('connect', () => {
  	client.write('data from client');
});

client.on('data', (chunk) => {
	console.log(chunk.toString());
	client.end();
});