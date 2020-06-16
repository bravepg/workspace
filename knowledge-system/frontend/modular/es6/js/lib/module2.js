'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
function fun1() {
  console.log('fun1() module1');
}

function fun2() {
  console.log('fun2() module1');
}

exports.fun1 = fun1;
exports.fun2 = fun2;