/*
* @Author: gaopeng
* @Email:  gaopeng_hdu@163.com
* @Date:   2018-03-30 10:27:29
* @Last Modified by:   gaopeng
* @Last Modified time: 2018-03-30 15:21:51
*/

'use strict';

var express = require('express'),
	cookieParser = require('cookie-parser'),
	session = require('express-session'),
	credentials = require('./credential.js');

var app = express();

app.listen(3000);

app.use(cookieParser(credentials.cookieSecret));

app.use(session({

    secret: credentials.cookieSecret, // 建议使用 128 个字符的随机字符串，这里不写secret的话cookie存储的是不加密的sessionid

	saveUninitialized: true,  // 是否自动保存未初始化的会话

    resave: false,  // 是否每次都重新保存会话，建议false

}));

app.get('/',function(req, res) {
	res.send("session");
});