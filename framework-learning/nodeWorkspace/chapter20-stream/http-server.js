/*
* @Author: gaopeng
* @Email:  gaopeng_hdu@163.com
* @Date:   2018-07-27 09:53:42
* @Last Modified by:   gaopeng
* @Last Modified time: 2018-07-27 10:17:25
*/

'use strict';
const http = require('http');

const server = http.createServer((req, res) => {
	// req 是一个 http.IncomingMessage 实例，它是可读流。
  	// res 是一个 http.ServerResponse 实例，它是可写流。

  	let body = '';
  	// 接收数据为 utf8 字符串，
  	// 如果没有设置字符编码，则会接收到 Buffer 对象。
  	req.setEncoding('utf8');

  	// 如果添加了监听器，则可读流会触发 'data' 事件。
  	// 当有数据可读时，可读流会使用 EventEmitter API 来通知应用程序
  	req.on('data', (chunk) => {
    	body += chunk;
  	});

  	// 'end' 事件表明整个请求体已被接收。 
  	req.on('end', () => {
    	try {
	      	const data = JSON.parse(body);
	      	// 响应一些信息给用户。
	      	res.write(typeof data);
	      	res.end();
    	} catch (er) {
      		// json 解析失败。
	      res.statusCode = 400;
	      return res.end(`错误: ${er.message}`);
    	}
  	});
});

server.listen(1337);