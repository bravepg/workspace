/*
* @Author: gaopeng
* @Email:  gaopeng_hdu@163.com
* @Date:   2018-07-26 23:01:30
* @Last Modified by:   gaopeng
* @Last Modified time: 2018-07-26 23:16:12
*/

'use strict';

const buf = Buffer.from([-1, 5]);

console.log(buf.readInt8(0));
// Prints: -1
console.log(buf.readInt8(1));
// Prints: 5
// console.log(buf.readInt8(2));  // Throws ERR_OUT_OF_RANGE


const buf1 = Buffer.from([1, -2]);

console.log(buf1.readUInt8(0));
// Prints: 1
console.log(buf1.readUInt8(1));
// Prints: 254   256 - 2
// console.log(buf.readUInt8(2));  // Throws ERR_OUT_OF_RANGE


const buf2 = Buffer.allocUnsafe(26);

for (let i = 0; i < 26; i++) {
  // 97 是 'a' 的十进制 ASCII 值 
  buf2[i] = i + 97;
}

const buf3 = buf2.slice(0, 3);

// 输出: abc
console.log(buf3.toString('ascii', 0, buf3.length));

buf2[0] = 33;

// 输出: !bc
console.log(buf3.toString('ascii', 0, buf3.length));


const buf4 = Buffer.allocUnsafe(256);

const len = buf4.write('\u00bd + \u00bc = \u00be', 0);

// 输出: 12 个字节: ½ + ¼ = ¾
console.log(`${len} 个字节: ${buf4.toString('utf8', 0, len)}`);
