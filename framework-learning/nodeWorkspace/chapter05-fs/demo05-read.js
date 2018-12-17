/*
* @Author: gaopeng
* @Email:  gaopeng_hdu@163.com
* @Date:   2018-08-12 10:41:41
* @Last Modified by:   gaopeng
* @Last Modified time: 2018-08-12 10:46:36
*/

'use strict';
var fs = require('fs');
// var path = require('path');

fs.readdir(__dirname, (err, files) => {
	console.log(files);
});

fs.readFile('/etc/passwd', 'utf8', (err, data) => {
  	if (err) throw err;
  	console.log(data);
});