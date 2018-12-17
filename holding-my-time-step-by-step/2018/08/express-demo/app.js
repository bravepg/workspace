/*
* @Author: gaopeng
* @Email:  gaopeng_hdu@163.com
* @Date:   2018-08-02 10:34:22
* @Last Modified by:   gaopeng
* @Last Modified time: 2018-08-02 15:22:15
*/

'use strict';
var express = require('express');
var greet = express.Router();
var app = express();

app.get('/', function(req, res, next) {
	res.append('Set-Cookie', 'foo=bar; Path=/; HttpOnly');
	res.append('Warning', '199 Miscellaneous warning');
	res.location('https://www.baidu.com');
	res.send('Hello');
	// 一旦调用此方法，append 函数全部失效
	res.set('Content-Type', 'text/plain');   // 与 res.header() 相同
	// res.sendStatus(200); // equivalent to res.status(200).send('OK')
});

var server = app.listen(3000, function () {
  	var host = server.address().address;
  	var port = server.address().port;
  	console.log('Example app listening at http://%s:%s', host, port);
});