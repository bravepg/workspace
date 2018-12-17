/*
* @Author: gaopeng
* @Email:  gaopeng_hdu@163.com
* @Date:   2018-04-03 14:08:27
* @Last Modified by:   gaopeng
* @Last Modified time: 2018-04-03 14:23:45
*/

'use strict';

var account = require('./account.js');
var auth = require('./auth.js');

module.exports.set = function(app) {
	account.set(app);
	auth.set(app);
}