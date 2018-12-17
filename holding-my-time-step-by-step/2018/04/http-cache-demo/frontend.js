/*
* @Author: gaopeng
* @Email:  gaopeng_hdu@163.com
* @Date:   2018-04-15 14:28:09
* @Last Modified by:   gaopeng
* @Last Modified time: 2018-04-17 19:26:19
*/

'use strict';

var express = require('express'),
	app = express();

app.use(express.static("./", {
	maxAge: 20000
}));

app.listen(4000);