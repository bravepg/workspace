/*
* @Author: gaopeng
* @Email:  gaopeng_hdu@163.com
* @Date:   2018-08-11 12:28:16
* @Last Modified by:   gaopeng
* @Last Modified time: 2018-08-11 12:32:53
*/

'use strict';
const { spawn } = require('child_process');
const ps = spawn('ps', ['ax']);
const grep = spawn('grep', ['ssh']);

ps.stdout.on('data', (data) => {
  	grep.stdin.write(data);
});

ps.stderr.on('data', (data) => {
  	console.log(`ps stderr: ${data}`);
});

ps.on('close', (code) => {
  	if (code !== 0) {
    	console.log(`ps 进程退出码：${code}`);
  	}
  	grep.stdin.end();
});

grep.stdout.on('data', (data) => {
  	console.log(data.toString());
});

grep.stderr.on('data', (data) => {
  	console.log(`grep stderr: ${data}`);
});

grep.on('close', (code) => {
  	if (code !== 0) {
    	console.log(`grep 进程退出码：${code}`);
  	}
});