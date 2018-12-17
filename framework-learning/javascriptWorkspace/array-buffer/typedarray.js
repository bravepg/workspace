/*
* @Author: gaopeng
* @Email:  gaopeng_hdu@163.com
* @Date:   2018-05-07 16:23:32
* @Last Modified by:   gaopeng
* @Last Modified time: 2018-05-08 09:21:06
*/

'use strict';

// ArrayBuffer 对象作为内存区域，可以存放多种类型的数据。
// 同一段内存，不同数据有不同的解读方式，这就叫做视图（view）

// TypeArray这种类型化数组与普通数组的区别
// 1. TypedArray 数组的所有成员，都是同一种类型和格式。
// 2. TypedArray数组的成员是连续的，不会有空位。
// 3. TypedArray数组只是一层视图，本身不储存数据，它的数据都储存在底层的ArrayBuffer对象之中，要获取底层对象必须使用buffer属性。

// 构造函数有很多种用法
// 1. TypedArray(ArrayBuffer buffer, int byteOffset, int length)
// 创建一个8字节的ArrayBuffer
var b = new ArrayBuffer(8);

// 创建一个指向b的Int32视图，开始于字节0，直到缓冲区的末尾，Int32Array 这种类型化数组占据了4个字节，因此只存在 v1[0] 、v1[1]
var v1 = new Int32Array(b);
console.log(v1.buffer);
console.log(v1.byteLength);  // 8
console.log(v1[0]);   // 0
console.log(v1[1]);   // 0
console.log(v1[2]);   // undefined

// 创建一个指向b的Uint8视图，开始于字节2，直到缓冲区的末尾，Int8Array 这种类型化数组占据了1个字节
var v2 = new Uint8Array(b, 2);
console.log(v2.buffer);
console.log(v2.byteLength);  // 6
console.log(v2[0]);   // 0
console.log(v2[1]);   // 0
console.log(v2[3]);   // 0
console.log(v2[5]);   // 0
console.log(v2[6]);   // undefined

// 创建一个指向b的Int16视图，开始于字节2，长度为2，Int8Array 这种类型化数组占据了2个字节
var v3 = new Int16Array(b, 2, 2);
console.log(v3.buffer);     // 4
console.log(v3.byteLength);
console.log(v3[0]);   // 0
console.log(v3[1]);   // 0
console.log(v3[2]);   // undefined



// 2. 第二种方式 TypedArray(int length)
var f64a = new Float64Array(8);
f64a[0] = 10;
f64a[1] = 20;
f64a[2] = f64a[0] + f64a[1];
console.log(f64a.buffer); // ArrayBuffer { byteLength: 64 }
console.log(f64a.byteLength); // 64


// 3. 第三种方式 TypedArray(arrayLikeObject)
var typedArray = new Uint16Array([1, 2, 3, 4]);
console.log(typedArray.byteLength); // 8
console.log(typedArray.buffer); // ArrayBuffer { byteLength: 8 }



// 4. 第四种方式 TypedArray(typedArray)
var typedArray02 = new Int8Array(new Uint8Array(4));

// 此时生成的新数组，只是复制了参数数组的值，对应的底层内存是不一样的
// 新数组会开辟一段新的内存储存数据，不会在原数组的内存之上建立视图。
var x = new Int8Array([1, 1]);
var y = new Int8Array(x);
x[0] // 1
y[0] // 1

x[0] = 2;
y[0] // 1