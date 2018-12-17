/*
* @Author: gaopeng
* @Email:  gaopeng_hdu@163.com
* @Date:   2017-11-15 16:36:41
* @Last Modified by:   gaopeng
* @Last Modified time: 2017-11-15 17:17:52
*/

'use strict';

// 创建a模块
define(function (require, exports, module) {
	exports.getTime = function () {
		return new Date();
	}
});