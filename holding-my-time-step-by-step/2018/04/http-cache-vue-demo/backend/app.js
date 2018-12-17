/*
* @Author: gaopeng
* @Email:  gaopeng_hdu@163.com
* @Date:   2018-04-08 15:06:37
* @Last Modified by:   gaopeng
* @Last Modified time: 2018-04-15 14:10:34
*/

'use strict';
let http = require('http');

// from disk cache
let server = http.createServer((req, res) => {

	res.setHeader('Cache-Control', 'max-age=3600')
	res.end('harttle.land')
})

// etag
// let server = http.createServer((req, res) => {
// 	console.log(req.url, req.headers['if-none-match'])
// 	if (req.headers['if-none-match']) {
// 		// 检查文件版本
// 		res.statusCode = 304
// 		res.end()
// 	}
// 	else {
// 		res.setHeader('Etag', '00000000')
// 		res.end('harttle.land')
// 	}
// })

// last-modified
// let server = http.createServer((req, res) => {
// 	console.log(req.url, req.headers['if-modified-since'])
// 	if (req.headers['if-modified-since']) {
// 		// 检查时间戳
// 		res.statusCode = 304
// 		res.end()
// 	}
// 	else {
// 		res.setHeader('Last-Modified', new Date().toGMTString())
// 		// res.setHeader('Last-Modified', new Date(new Date().getTime() - 86400000).toGMTString())
// 		res.setHeader('Content-Type', 'text/html')
// 		res.end('harttle.land')
// 	}
// })

server.listen(3333)