/*
* @Author: gaopeng
* @Email:  gaopeng_hdu@163.com
* @Date:   2018-05-07 13:35:43
* @Last Modified by:   gaopeng
* @Last Modified time: 2018-05-07 13:48:51
*/

'use strict';

// 创建一个长度为10、且用0填充的 Buffer
const buff1 = Buffer.alloc(10);
console.log(buff1);  // <Buffer 00 00 00 00 00 00 00 00 00 00>

// 创建一个长度为10、且用0x2填充的 Buffer
const buff2 = Buffer.alloc(10, 2);
console.log(buff2); // <Buffer 02 02 02 02 02 02 02 02 02 02>

// 创建一个长度为10，且未初始化的 Buffer
// 这个方法比调用 Buffer.alloc() 更快
// 但是返回的 Buffer 实例可能包含旧数据
// 因此需要使用 fill() 或 write() 重写
const buff3 = Buffer.allocUnsafe(10);
console.log(buff3); // <Buffer 20 00 27 00 75 00 74 00 69 00>

// 创建一个包含[0x1, 0x2, 0x3] 的 Buffer。
const buff4 = Buffer.from([1, 2, 3]);
console.log(buff4); // <Buffer 01 02 03>

// 创建一个包含 UTF-8 字节 [0x74, 0xc3, 0xa9, 0x73, 0x74] 的 Buffer。
const buff5 = Buffer.from('tést');
console.log(buff5);

// 创建一个包含 Latin-1 字节 [0x74, 0xe9, 0x73, 0x74] 的 Buffer。
const buf6 = Buffer.from('tést', 'latin1');