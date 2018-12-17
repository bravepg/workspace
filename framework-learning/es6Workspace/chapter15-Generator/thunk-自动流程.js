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

var g = function* () {
	var r1 = yield readFileThunk('./txt1.txt');
	var r2 = yield readFileThunk('./txt2.txt');
	console.log(r1.toString());
	console.log(r2.toString());
}

function run(fn) {
	var gen = fn();
	function next(err, data) {
		console.log('data', data);
	    var result = gen.next(data);
	    console.log('result', result);
	    if (result.done) return;
	    result.value(next);
	}
  	next();
}

run(g);