/*
* @Author: gaopeng
* @Email:  gaopeng_hdu@163.com
* @Date:   2017-11-15 16:36:49
* @Last Modified by:   gaopeng
* @Last Modified time: 2018-04-18 10:48:13
*/

'use strict';

// 创建b模块
define('b', ['require', 'exports', 'a'], function (require, exports, a) {
	exports.test = function () {
		return {   
	      now: a.getTime()    
	    }; 
	}
});