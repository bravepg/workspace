/*
* @Author: gaopeng
* @Email:  gaopeng_hdu@163.com
* @Date:   2018-08-11 14:00:44
* @Last Modified by:   gaopeng
* @Last Modified time: 2018-08-11 14:00:52
*/

'use strict';

const { spawn } = require('child_process');
const grep = spawn('grep', ['ssh']);

console.log(`衍生的子进程的 pid：${grep.pid}`);
grep.stdin.end();