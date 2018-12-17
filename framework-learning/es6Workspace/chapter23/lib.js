/*
* @Author: gaopeng
* @Email:  gaopeng_hdu@163.com
* @Date:   2017-11-21 10:52:51
* @Last Modified by:   gaopeng
* @Last Modified time: 2017-11-21 10:55:57
*/

'use strict';

// CommonJS 模块输出的是一个值的拷贝
// var counter = 3;

// function incCounter() {
// 	counter++;
// }

// module.exports = {
// 	counter: counter,
//   	incCounter: incCounter,
// };

// ES6 模块输出的是值的引用
export let counter = 3;
export function incCounter() {
  counter++;
}