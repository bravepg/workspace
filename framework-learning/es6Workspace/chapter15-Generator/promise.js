/*
* @Author: gaopeng
* @Email:  gaopeng_hdu@163.com
* @Date:   2017-11-28 22:21:46
* @Last Modified by:   gaopeng
* @Last Modified time: 2017-11-28 22:24:44
*/

'use strict';

var readFile = require('fs-readfile-promise');

readFile('./txt1.txt')
	.then(function (data) {
		console.log(data.toString());
	})
	.then(function () {
		return readFile('./txt2.txt')
	})
	.then(function (data) {
		console.log(data.toString());
	})
