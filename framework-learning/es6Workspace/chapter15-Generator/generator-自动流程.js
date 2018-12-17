/*
* @Author: gaopeng
* @Email:  gaopeng_hdu@163.com
* @Date:   2017-12-01 15:16:30
* @Last Modified by:   gaopeng
* @Last Modified time: 2017-12-01 16:12:33
*/

'use strict';

var fs = require('fs');
// var thunkify = require('thunkify');
// var readFileThunk = thunkify(fs.readFile);

// var gen = function* () {
// 	var r1 = yield readFileThunk('./txt1.txt');
// 	console.log(r1.toString());
// 	var r2 = yield readFileThunk('./txt2.txt');
// 	console.log(r2.toString());
// }

// var g = gen();
// var r1 = g.next();

// r1.value(function (err, data) {
// 	if (err) throw err;
// 	var r2 = g.next(data);
// 	r2.value(function (err, data) {
// 		if (err) throw err;
// 		g.next(data);
// 	});
// });

// 上面第一种方式是利用回调函数交换控制权，下面利用promise
var readFile = function (fileName) {
	return new Promise(function (resolve, reject) {
		fs.readFile(fileName, function(err, data) {
			if (error) return reject(error);
      		resolve(data);
		});
	});
};

var gen = function* () {
	var r1 = yield readFileThunk('./txt1.txt');
	console.log(r1.toString());
	var r2 = yield readFileThunk('./txt2.txt');
	console.log(r2.toString());
}

var g = gen();

g.next().value.then(function (err, data) {
	g.next(data).value.then(function (err, data) {
		g.next(data);
	})
});


function run(gen) {
	var g = gen();
	function next(err, data) {
		var result = g.next(data);
		if (result.done) return result.value;
		result.value.then(function (err, data) {
			next(data);
		})
	}
	next();
}