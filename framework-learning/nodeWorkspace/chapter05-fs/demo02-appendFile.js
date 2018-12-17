/*
* @Author: gaopeng
* @Email:  gaopeng_hdu@163.com
* @Date:   2018-08-11 17:25:31
* @Last Modified by:   gaopeng
* @Last Modified time: 2018-08-11 17:29:38
*/

'use strict';
var fs = require('fs');

// 异步地追加数据到一个文件，如果文件不存在则创建文件
// fs.appendFile('message.txt', 'data to append', (err) => {
//   	if (err) throw err;
//   	console.log('The "data to append" was appended to file!');
// });

// file 可能是一个被打开用来追加数据的数字文件描述符（通过 fs.open() 或者 fs.openSync()）
// 这样的文件描述符将不会被自动关闭。
fs.open('message.txt', 'a', (err, fd) => {
  	if (err) throw err;
  	console.log('fd', fd);
  	fs.appendFile(fd, 'data to append', 'utf8', (err) => {
    	fs.close(fd, (err) => {
      		if (err) throw err;
   		});
    if (err) throw err;
  });
});