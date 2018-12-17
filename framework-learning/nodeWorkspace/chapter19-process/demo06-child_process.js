/*
* @Author: gaopeng
* @Email:  gaopeng_hdu@163.com
* @Date:   2018-08-11 10:58:49
* @Last Modified by:   gaopeng
* @Last Modified time: 2018-08-11 10:59:00
*/

'use strict';
const { spawn } = require('child_process');
const ls = spawn('ls', ['-lh', '/usr']);

ls.stdout.on('data', (data) => {
  	console.log(`输出：${data}`);
});

ls.stderr.on('data', (data) => {
  	console.log(`错误：${data}`);
});

ls.on('close', (code) => {
  	console.log(`子进程退出码：${code}`);
});