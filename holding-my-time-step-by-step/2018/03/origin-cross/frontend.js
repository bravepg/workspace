/*
* @Author: gaopeng
* @Email:  gaopeng_hdu@163.com
* @Date:   2018-03-28 10:57:43
* @Last Modified by:   gaopeng
* @Last Modified time: 2018-03-28 13:19:05
*/

'use strict';

var express = require('express'),
	app = express();

app.use(express.static("./"))
app.get('/', function (req, res) {
	res.render(__dirname + '/index.html');
});

app.listen(4000);