/*
* @Author: gaopeng
* @Email:  gaopeng_hdu@163.com
* @Date:   2018-05-07 17:03:43
* @Last Modified by:   gaopeng
* @Last Modified time: 2018-05-07 17:15:03
*/

'use strict';

// 假定某段buffer包含如下字节 [0x02, 0x01, 0x03, 0x07]
var buffer = new ArrayBuffer(4);
var v1 = new Uint8Array(buffer);

v1[0] = 2;
v1[1] = 1;
v1[2] = 3;
v1[3] = 7;

console.log(v1);  // Uint8Array [ 2, 1, 3, 7 ]

var uInt16View = new Uint16Array(buffer);

// 计算机采用小端字节序
// 所以头两个字节等于258
if (uInt16View[0] === 258) {
  console.log('OK'); // "OK"
}

console.log(uInt16View);  // Uint16Array [ 258, 1795 ]

// 字节变为[0xFF, 0x00, 0x03, 0x07]
uInt16View[0] = 255;
console.log(v1);  // Uint8Array [ 255, 0, 3, 7 ]

// 字节变为[0x05, 0xFF, 0x03, 0x07]
uInt16View[0] = 0xff05;
console.log(v1); // Uint8Array [ 5, 255, 3, 7 ]

// 字节变为[0x05, 0xFF, 0x10, 0x02]
uInt16View[1] = 0x0210;
console.log(v1); // Uint8Array [ 5, 255, 16, 2 ]