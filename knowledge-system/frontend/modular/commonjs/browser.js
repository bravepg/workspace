(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports = {
  msg: 'module1',
  foo() {
    console.log(this.msg)
  }
}
},{}],2:[function(require,module,exports){
module.exports = function() {
  console.log('module2')
}
console.log('module load')
},{}],3:[function(require,module,exports){
const module1 = require('./module1')
const module2 = require('./module2')
// // 删除所有模块的缓存
// Object.keys(require.cache).forEach(function(key) {
//   delete require.cache[key];
// })
// require 加载一次后结果就会被缓存
// 必须手动去删除缓存
const module3 = require('./module2')

module1.foo()
module2()
module3()
},{"./module1":1,"./module2":2}]},{},[3]);
