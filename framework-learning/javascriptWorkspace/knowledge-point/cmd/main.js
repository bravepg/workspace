/*
* @Author: gaopeng
* @Email:  gaopeng_hdu@163.com
* @Date:   2017-11-15 16:48:32
* @Last Modified by:   gaopeng
* @Last Modified time: 2018-04-18 10:52:31
*/

'use strict';

define(function (require, exports, module) {
	/* 按需加载a.js */ 
	var a = require('./a');
	console.log('this', this)
  	console.log(a.getTime());
});