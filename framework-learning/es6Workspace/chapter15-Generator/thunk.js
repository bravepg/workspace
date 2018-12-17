/*
* @Author: gaopeng
* @Email:  gaopeng_hdu@163.com
* @Date:   2017-11-29 10:44:24
* @Last Modified by:   gaopeng
* @Last Modified time: 2017-11-29 13:32:06
*/

'use strict';

// 首先先验证一个函数参数有关的问题
// var a = function (...args) {
// 	// console.log(typeof(...arguments));  // 报错
// 	console.log(args); // [1, 2]
// 	console.log(...args); //1, 2
// 	console.log(...arguments);
// }
// a();
// a(1, 2);  // 1, 2
// var a = function (b) {
// 	console.log(b)
// 	console.log(...arguments);
// }
// a(); // undefined 1,2
// a(1, 2); // 1  1,2

// ES5 版本的Thunk
var Thunk = function(fn) {
	return function() {
		var args = Array.prototype.slice.apply(arguments);
		return function(callback) {
			args.push(callback);
			// var called;

			// args.push(function () {
	  //       	if (called) return;
		 //        called = true;
		 //        console.log(...arguments)
		 //        callback.apply(null, arguments);
		 //     });
			fn.apply(this, args);
		}
	}
}

// ES6版本的Thunk
var Thunk = function (fn) {
	return function(...args) {
		return function(callback) {
			fn.call(this, ...args, callback);
		}
	}
}

// function f(a, cb) {
// 	cb(a);
// }

// const ft = Thunk(f);
// ft(1)(console.log);  // 1

// function f(a, cb) {
// 	cb(1);
// }

// var s = function(d, a) {
// 	console.log(d, a);
// };

// const ft = Thunk(f);
// ft(1)(s);

var thunkify = require('thunkify');
var fs = require('fs');

function f(a, b, callback) {
	var sum = a + b;
	callback(sum);   // 只打印一次，因为执行了检查机制
	callback(sum);
}

var ft = thunkify(f);
var print = console.log.bind(console);
ft(1, 2)(print);
