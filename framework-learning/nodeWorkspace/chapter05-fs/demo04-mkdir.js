/*
* @Author: gaopeng
* @Email:  gaopeng_hdu@163.com
* @Date:   2018-08-12 10:24:57
* @Last Modified by:   gaopeng
* @Last Modified time: 2018-08-12 10:26:39
*/

'use strict';
var fs = require('fs');

fs.mkdir('temp', (err) => {
	console.log(err);   // 文件夹已经存在
});