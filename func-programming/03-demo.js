/*
* @Author: gaopeng
* @Email:  gaopeng_hdu@163.com
* @Date:   2018-05-28 10:48:21
* @Last Modified by:   gaopeng
* @Last Modified time: 2018-05-28 12:26:57
*/

'use strict';
// var compose = function(f, g) {
// 	return function(x) {
//     	return f(g(x));
//   	};
// };

// var toUpperCase = function(x) { return x.toUpperCase(); };
// var exclaim = function(x) { return x + '!'; };
// var shout = compose(exclaim, toUpperCase);

// console.log(shout("send in the clowns"));


// var head = function(x) { return x[0]; };
// var reverse = function(arr) {
// 	return arr.reduce(function(acc, x){ 
// 		console.log('acc', acc, 'x', x);
// 		return [x].concat(acc); 
// 	}, []);
// }
// var last = compose(head, reverse);
// console.log(last(['jumpkick', 'roundhouse', 'uppercut']));




// var loudLastUpper = compose(exclaim, toUpperCase, head, reverse)

// console.log(loudLastUpper(['jumpkick', 'roundhouse', 'uppercut']));


function compose(...funcs) {
	return funcs.reduce((a, b) => (...args) => {
		console.log('a', a, 'b', b);
		return a(b(...args))
	})
}
var fn = compose((param) => console.log('param', param), (param) => console.log('param2', param), (param) => console.log('param3', param), (param) => console.log('param4', param))
fn(4)

// var arr = [1]
// var sum = [].reduce((a, b) => {
// 	console.log('a', a);
// 	return a + b;
// }, 1)

// console.log(sum)