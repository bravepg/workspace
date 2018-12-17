/*
* @Author: gaopeng
* @Email:  gaopeng_hdu@163.com
* @Date:   2017-11-30 13:31:02
* @Last Modified by:   gaopeng
* @Last Modified time: 2018-03-23 16:12:41
*/

'use strict';
var currying = function(fn) {
	var args = [].slice.call(arguments, 1);
	return function () {
		[].push.apply(args, [].slice.call(arguments));
		fn.apply(null, args);
	}
}

var sum = currying(function () {
	var args = [].slice.call(arguments);
	return args.reduce(function (a, b) {
		return a + b;
	});	
}, 10)

sum(10, 20);