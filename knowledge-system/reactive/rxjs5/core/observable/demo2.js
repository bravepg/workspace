/**
 * Observable 是泛化的函数
 *    函数可以返回值，Observable 可以返回多个值，因此被称为没有参数的，但是可以有多个返回值的泛化函数
 * 
 * Observable 既不像 EventEmitter，也不像多个值的 Promise
 *    在下面具体代码中解释说明
 */
const Rx = require('rxjs/Rx');

// 普通函数
function foo() {
  console.log('hello');
  return 23;
}

const x = foo();
console.log('x', x);
const y = foo();
console.log('y', y);

// 使用 Observable 重写上面的函数
const observer = Rx.Observable.create(function(observer) {
  console.log('hello');
  observer.next(23);
});

observer.subscribe(function (x) {
  console.log('observer x', x);
});
observer.subscribe(function (y) {
  console.log('observer y', y);
});

// 上面的两种方式是完全等价的，函数和 Observable 都是惰性运算
// 函数如果不调用不会执行 console.log('hello');
// Observable 如果不通过 subscribe 来订阅，也不会执行
// 注意：两个函数调用会触发两次的副作用，Observable 通过两次 subscribe 也会产生两次的副作用
// 通过 Subject 可以实现 Observable 的共享
// Subject 是 Observable的特殊类型，可以进行多播。同时也是观察者，将 Subject 传入 Observable，便可以使其共享给多个观察者

// ====== 但是 EventEmitter 会共享副作用 =====
// 举个例子
/**
 * 
 * eventEmitter.on('click', () => {  });
 * eventEmitter.on('click', () => {  });
 * 
 * eventEmitter.emit('click')
 * 
 * 这两行共享同一个副作用 eventEmitter，为什么说 eventEmitter 是个副作用呢？
 * 因为他是通过 new EventEmitter() 来产生的
 * 
 * 如果有一个类通过继承的方式具有 EventEmitter 的特性，比如
 * export class Job extends EventEmitter {
 *   constructor() {
 *     super();
 *   }
 * }
 * 在 new Job 的时候会产生唯一一个对象，因此是共享
 * 
 * 同时也解释了为什么说 EventEmitter 是尽早执行，无论有没有监听者
 * 因为第一步操作就是 new EventEmitter()，早早执行了
 */
