/*
* @Author: gaopeng
* @Email:  gaopeng_hdu@163.com
* @Date:   2018-04-04 14:04:53
* @Last Modified by:   gaopeng
* @Last Modified time: 2018-04-12 15:08:43
*/

'use strict';

var express = require('express');

const app = express();

app.use(express.static("./"));

app.get('/', function (req, res) {
	res.render(__dirname + '/index.html');
});

app.listen(4000);