/*
* @Author: gaopeng
* @Email:  gaopeng_hdu@163.com
* @Date:   2018-08-11 15:58:34
* @Last Modified by:   gaopeng
* @Last Modified time: 2018-08-14 15:44:31
*/

'use strict';
// 不推荐在调用 fs.open() 、 fs.readFile() 或 fs.writeFile() 之前使用 fs.access() 检查一个文件的可访问性
// 通常，仅在文件不会被直接使用时才检查一个文件的可访问性，例如当它的可访问性是来自另一个进程的信号

var fs = require('fs');
// 不推荐
fs.access('myfile', (err) => {
  	if (!err) {
    	console.error('文件已存在');
    	return;
  	}

  	fs.open('myfile', 'wx', (err, fd) => {
    	if (err) throw err;
    	writeMyData(fd);
  	});
});

// 推荐
fs.open('myfile', 'wx', (err, fd) => {
  	if (err) {
    	if (err.code === 'EEXIST') {
      		console.error('文件已存在');
      		return;
    	}
    	throw err;
  	}
  	writeMyData(fd);
});