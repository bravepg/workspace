/*
* @Author: gaopeng
* @Email:  gaopeng_hdu@163.com
* @Date:   2018-08-14 16:14:09
* @Last Modified by:   gaopeng
* @Last Modified time: 2018-08-14 16:15:04
*/

'use strict';

let path = require('path');

module.exports = {
	entry: './app.js',
	output: {
		publicPath: "/assets/",
		filename: 'bundle.js'
	}
}