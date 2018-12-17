/*
* @Author: gaopeng
* @Email:  gaopeng_hdu@163.com
* @Date:   2018-04-27 16:10:48
* @Last Modified by:   gaopeng
* @Last Modified time: 2018-04-27 16:26:04
*/

'use strict';

// 某些类型的对象 (触发器) 会周期性地触发 某些事件(命名事件) 来调用函数对象 (监听器)
// 例如
// 1. net.Server、http.Server(继承自net.Server)在每次有新连接时触发事件
// 2. fs.ReadStream 会在文件被打开时触发事件
// 3. 流对象会在事件可读时触发事件

const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

// myEmitter 是触发器
// event 为上述提到的命事件，所有绑定在该事件的函数都会同步执行
// 方法 即是监听器，监听器不存在返回值
myEmitter.on('event', () => {
	console.log('触发了一个事件！');
});

// myEmitter.emit('event');    // 触发了一个事件！



// this指向问题
// 1. emit方法的参数可以被传递给监听器，普通监听器的this指向当前触发器实例
// 2. 箭头函数的this不再指向当前触发器实例
// 3. 采用bind绑定this依然与箭头函数的this指向相同

myEmitter.on('this', function(a, b) {
  console.log(a, b, this);
  // 打印:
  //   a b MyEmitter {
  //     domain: null,
  //     _events: { event: [Function] },
  //     _eventsCount: 1,
  //     _maxListeners: undefined }
});

myEmitter.on('this', (a, b) => {
  console.log(a, b, this);
  // 打印: a b {}
});

myEmitter.on('this', function(a, b) {
  console.log(a, b, this);
  // 打印: a b {}
}.bind(this));

myEmitter.emit('this', 'a', 'b');