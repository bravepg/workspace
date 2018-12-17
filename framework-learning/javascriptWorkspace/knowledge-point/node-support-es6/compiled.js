(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
/*
* @Author: gaopeng
* @Email:  gaopeng_hdu@163.com
* @Date:   2018-04-18 11:01:03
* @Last Modified by:   gaopeng
* @Last Modified time: 2018-04-18 11:12:32
*/

'use strict';

module.exports = 'a';

// const a = 'a';
// export default a;
},{}],2:[function(require,module,exports){
/*
* @Author: gaopeng
* @Email:  gaopeng_hdu@163.com
* @Date:   2018-04-18 11:01:18
* @Last Modified by:   gaopeng
* @Last Modified time: 2018-04-18 11:04:42
*/

'use strict';

// import a from './a';
var a = require('./a');

console.log(a.default);
},{"./a":1}]},{},[2]);
