/*
* @Author: gaopeng
* @Email:  gaopeng_hdu@163.com
* @Date:   2018-04-18 14:21:30
* @Last Modified by:   gaopeng
* @Last Modified time: 2018-04-18 14:59:15
*/

'use strict';

/*
* @function DataHub
* 定义发布者
*/

function DataHub() {}

DataHub.prototype.notify = function (url, callback) {
	callback(url);
}

module.exports = DataHub;