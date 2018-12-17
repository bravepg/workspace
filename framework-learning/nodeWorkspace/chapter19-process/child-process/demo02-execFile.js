/*
* @Author: gaopeng
* @Email:  gaopeng_hdu@163.com
* @Date:   2018-08-11 12:14:15
* @Last Modified by:   gaopeng
* @Last Modified time: 2018-08-11 12:14:25
*/

'use strict';
const { execFile } = require('child_process');
const child = execFile('node', ['--version'], (error, stdout, stderr) => {
  	if (error) {
    	throw error;
  	}
  	console.log(stdout);
});