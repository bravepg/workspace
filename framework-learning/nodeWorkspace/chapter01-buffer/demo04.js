/*
* @Author: gaopeng
* @Email:  gaopeng_hdu@163.com
* @Date:   2018-07-26 20:43:43
* @Last Modified by:   gaopeng
* @Last Modified time: 2018-07-26 23:00:32
*/

'use strict';
const arrayBuffer = new ArrayBuffer(16);
const typearray = new Uint8Array(arrayBuffer);
const buffer = Buffer.from(arrayBuffer);

console.log(typearray[16])
console.log(buffer[15])
console.log(buffer.byteLength);

console.log('---------------');

const buff = Buffer.from('this is a buffer');
console.log(buff);
console.log(buff.indexOf('this'));  // 0
console.log(buff.indexOf('is'));  // 2
console.log(buff.byteLength);   	// 16
console.log(buff.length);      // 16


console.log('---------------');
const buf = Buffer.from([1, 2, 3]);
console.log(buf); // <Buffer 01 02 03>

const buf1 = Buffer.from(['a', 2, 3]);
console.log(buf1); // <Buffer 00 02 03>
