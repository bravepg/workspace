/*
* @Author: gaopeng
* @Email:  gaopeng_hdu@163.com
* @Date:   2018-07-27 11:04:50
* @Last Modified by:   gaopeng
* @Last Modified time: 2018-07-27 11:06:13
*/

'use strict';
var stream = require('stream');

const readable = new stream.Readable();
console.log(readable.isPaused()); // === false

readable.pause();
readable.isPaused(); // === true
readable.resume();
readable.isPaused(); // === false