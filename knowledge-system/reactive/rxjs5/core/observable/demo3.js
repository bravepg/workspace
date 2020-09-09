/**
 * Observable 是同步还是异步的？
 * Observable 的订阅是同步的，就像函数的调用一样
 * Observable 返回值的方式跟函数不一样，函数只能同步返回值，Observable 可以随着时间的推移返回多个值，还可以存在异步返回值的情况
 */

const Rx = require('rxjs/Rx');

function foo() {
  console.log('hello');
}

console.log('before');
foo();
console.log('after');

// 将上述代码改写成 Observable
const observer = Rx.Observable.create(function() {
  console.log('hello');
});

console.log('before');
observer.subscribe();  // 由此可以看出来 Observable 的订阅是同步的
console.log('after');


const multiObserver = Rx.Observable.create(function(observer) {
  observer.next(1);
  setTimeout(() => {
    observer.next(2);
  }, 1000);
  observer.next(3);
});

foo(); // 同步返回一个值
multiObserver.subscribe(function(x) {
  console.log('x', x);
}); // 返回多个值，无论是同步还是异步