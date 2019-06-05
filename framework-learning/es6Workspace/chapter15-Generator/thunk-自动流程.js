/*
* @Author: gaopeng
* @Email:  gaopeng_hdu@163.com
* @Date:   2017-12-01 15:44:01
* @Last Modified by:   gaopeng
* @Last Modified time: 2017-12-01 15:57:02
*/

'use strict';

var fs = require('fs');
var thunkify = require('thunkify');
var readFileThunk = thunkify(fs.readFile);

var gen = function* () {
	var r1 = yield readFileThunk('./txt1.txt');
	var r2 = yield readFileThunk('./txt2.txt');
	console.log(r1.toString());
	console.log(r2.toString());
}

var g = gen();

function run(g) {
	function next(err, data) {
		if (err) return;
		var result = g.next(data);
		if (result.value) {
			result.value(next)
		}
	}
	next();
}

run(g);