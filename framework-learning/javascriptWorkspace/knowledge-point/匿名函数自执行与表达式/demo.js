/*
* @Author: gaopeng
* @Email:  gaopeng_hdu@163.com
* @Date:   2017-12-20 13:57:29
* @Last Modified by:   gaopeng
* @Last Modified time: 2017-12-20 14:21:59
*/

'use strict';
// 立即执行函数的几种写法
// 最常用的两种
// ( function() {}() );
// ( function() {} )();
var fn1 = (function () {
	console.log('fn1');
})();


var fn2 = function () {
	console.log('fn2');
}()

// 我们有的时候会看见上面两种写法，其实都是自执行的，因此下面会打印出undefined

console.log(typeof fn2) // undefined

// 延伸

// function() {
// 	console.log('匿名函数');
// }();
// function fn3() {
// 	console.log('fn3');
// }();
// 上述两种写法代码都会报错，底层原理是归约(https://www.zhihu.com/question/20249179)

function fn3() {
	console.log('fn3');
}(1)
// 这种写法是可以的