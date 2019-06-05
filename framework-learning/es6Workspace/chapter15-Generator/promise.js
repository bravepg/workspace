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

function* gen() {
	var r1 = yield readFile('./txt1.txt');
	var r2 = yield readFile('./txt2.txt');
	console.log(r1.toString());
	console.log(r2.toString());
}

var g = gen();

// var r1 = g.next()
// r1.value.then(function(data) {
// 	var r2 = g.next(data);
// 	r2.value.then(function(data) {
// 		g.next(data);
// 	})
// })
function next(data) {
	var result = g.next(data);
	if (result.done) return;
	result.value.then(next)
}

next()