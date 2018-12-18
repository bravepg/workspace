// 1. 注册相同事件的监听器会按照注册顺序同步执行
// 2. 可以使用setImmediate() 或 process.nextTick() 方法切换到异步操作模式

const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();


myEmitter.on('async', (a, b) => {
  setImmediate(() => {
    console.log('这个是异步发生的1');
  });
});

myEmitter.on('async', (a, b) => {
  console.log('这个是异步发生的2');
});
// 打印
// 这个是异步发生的2
// 这个是异步发生的1
// myEmitter.emit('async', 'a', 'b');

// 利用eventEmitter.once() 方法时可以注册一个对于特定事件最多被调用一次的监听器

let m = 0;
myEmitter.once('event', () => {
  console.log(++m);
});
myEmitter.emit('event');
// 打印: 1
myEmitter.emit('event');
// 忽略