/*
* @Author: gaopeng
* @Email:  gaopeng_hdu@163.com
* @Date:   2018-05-07 13:58:18
* @Last Modified by:   gaopeng
* @Last Modified time: 2018-05-07 15:39:10
*/

'use strict';

const buf = Buffer.from('hello world', 'ascii');

// 输出 68656c6c6f20776f726c64
console.log(buf.toString('hex'));

// 输出 aGVsbG8gd29ybGQ=
console.log(buf.toString('base64'));

// 输出 hello world
console.log(buf.toString('ascii'));

// 输出 hello world
console.log(buf.toString('utf8'));

console.log(buf.buffer)