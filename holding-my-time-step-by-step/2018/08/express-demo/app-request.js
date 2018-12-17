/*
* @Author: gaopeng
* @Email:  gaopeng_hdu@163.com
* @Date:   2018-08-02 10:34:22
* @Last Modified by:   gaopeng
* @Last Modified time: 2018-08-02 15:00:42
*/

'use strict';
var express = require('express');
var greet = express.Router();
var app = express();

app.get("/viewdirectory/:user", function (req, res) {
	// req.app 是对 app 实例的访问 
	// req.app === app，这是为了可以在其他文件中访问到实例
	console.log('req.originalUrl', req.originalUrl);  // /viewdirectory/1
	console.log('req.baseUrl', req.baseUrl);  // ''
	console.log('req.path', req.path);     // /viewdirectory/1
  	res.send("The views directory is " + req.app.get("views"));
});

greet.get('/jp', function (req, res) {
	console.log('fresh', req.fresh);
	// req.originalUrl 是对 NodeJS 的 http 中 url 属性的继承
	console.log('req.originalUrl', req.originalUrl);  // /greet/jp
	// req.baseUrl 是对express.Router有效的存在
  	console.log('req.baseUrl', req.baseUrl); // /greet
  	// 不包含 /greet 挂载点
  	console.log('req.path', req.path);  // /jp
  	res.send('Konichiwa!');
});

app.use('/greet', greet); 

var server = app.listen(3000, function () {
  	var host = server.address().address;
  	var port = server.address().port;
  	console.log('Example app listening at http://%s:%s', host, port);
});