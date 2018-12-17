/*
* @Author: gaopeng
* @Email:  gaopeng_hdu@163.com
* @Date:   2017-11-15 16:36:41
* @Last Modified by:   gaopeng
* @Last Modified time: 2018-04-18 10:48:09
*/

'use strict';

// 创建a模块
define('a', function (require, exports, module) {
	exports.getTime = function () {
		return new Date();
	}
});