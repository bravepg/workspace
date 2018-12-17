/*
* @Author: gaopeng
* @Email:  gaopeng_hdu@163.com
* @Date:   2017-12-01 15:53:49
* @Last Modified by:   gaopeng
* @Last Modified time: 2017-12-01 15:58:24
*/

'use strict';
var co = require('co');
var fs = require('fs');
var thunkify = require('thunkify');
var readFileThunk = thunkify(fs.readFile);

var gen = function* () {
	var r1 = yield readFileThunk('./txt1.txt');
	var r2 = yield readFileThunk('./txt2.txt');
	console.log(r1.toString());
	console.log(r2.toString());
}

co(gen).then(function (){
  console.log('Generator 函数执行完成');
});