/*
* @Author: gaopeng
* @Email:  gaopeng_hdu@163.com
* @Date:   2018-05-07 16:06:13
* @Last Modified by:   gaopeng
* @Last Modified time: 2018-05-07 16:23:18
*/

'use strict';

// ArrayBuffer 对象代表存储二进制数据的一段内存，它不能直接读写
// 只能通过视图( TypedArray 视图和 DataView 视图)来读写
// 视图的作用是以指定格式解读二进制数据

// 创建32字节的内存区域
var buff = new ArrayBuffer(32);

// 返回所分配的内存区域的字节长度
console.log(buff.byteLength);  // 32

// 指定 DataView 视图读写
var dataView = new DataView(buff);

// 返回对应的 ArrayBuffer 对象
console.log(dataView.buffer); // ArrayBuffer { byteLength: 32 }

// 返回所分配的内存区域的字节长度
console.log(dataView.byteLength);  // 32

// 从第1个字节读取一个8位无符号整数
var v1 = dataView.getUint8(0);
console.log(v1); // 0

// 从第2个字节读取一个16位无符号整数
var v2 = dataView.getUint16(1);
console.log(v2) // 0




// slice 操作其实有两步
// 1. 先分配一段新内存
// 2. 拷贝ArrayBuffer
var newBuffer = buff.slice(0, 3);

// ArrayBuffer.isView() 判断是否是视图实例
console.log(ArrayBuffer.isView(newBuffer));   // false

var v = new Int8Array(newBuffer);
console.log(ArrayBuffer.isView(v));    // true
// 返回对应的 ArrayBuffer 对象
console.log(v.buffer); // ArrayBuffer { byteLength: 3 }

// 返回所分配的内存区域的字节长度
console.log(v.byteLength);  // 3