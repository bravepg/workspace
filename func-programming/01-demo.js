/*
* @Author: gaopeng
* @Email:  gaopeng_hdu@163.com
* @Date:   2017-11-17 16:31:13
* @Last Modified by:   gaopeng
* @Last Modified time: 2017-11-17 17:00:20
*/

'use strict';

// 实现缓存
var memoize = function (f) {
	var cache = {};

	return function() {
		var arg_str = JSON.stringify(arguments);
		cache[arg_str] = cache[arg_str] || f.apply(f, arguments);
		return cache[arg_str];
	}
}

var squareNumber  = memoize(function (x){ return x * x; });
var squareNumber1  = memoize(function (x){ return x * x; });

squareNumber(4);
//=> 16

squareNumber(4); // 从缓存中读取输入值为 4 的结果
//=> 16

squareNumber(5);
//=> 25

squareNumber(5); // 从缓存中读取输入值为 5 的结果
//=> 25