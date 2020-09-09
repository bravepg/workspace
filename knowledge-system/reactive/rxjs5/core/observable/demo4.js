const Rx = require('rxjs/Rx');

// 创建 Observables————通过 create 或者创建操作符
// Rx.Observable.create 是 Observable 构造函数的别名
const observable = Rx.Observable.create(function subscribe(observer) {
  const id = setInterval(() => {
    observer.next('id');
  }, 1000);
  // 清理资源
  return function unsubscribe() {
    clearInterval(id);
  };
});

// 订阅 Observables
// 订阅 Observables 像是在调用函数，并提供接收返回值的回调函数
// subscribe 调用在同一 Observable 的多个观察者之间是不共享的
// subscribe 是启动 observable 的唯一方式，将值或者事件传递给本次的观察者

// 这里跟 addEventListener/removeEventListener/EventEmitter 最大的不同就是
// observable 不会将观察者注册为监听器，也不会维护一个观察者列表

// 而另外三种的写法一般是这样
// dom.addEventListener('click', () => { log(1) }); 
// dom.addEventListener('click', () => { log(2) }); 
// 无论是 log1 还是 log2 这两个观察者都会被注册为监听器，也就是事件监听机制，并且会维护一个观察者列表的注册表按照注册顺序执行
const subscription = observable.subscribe(x => console.log(x));

// 执行 Observables
// next/error/complete

// 清理 Observables
// 调用 unsubscribe() 方法就可以取消执行
// 正如同 observable.subscribe 类似于 function subscribe() {} 一致
// subscription.unsubscribe 也类似于 function subscribe() {} 的返回函数 unsubscribe
subscription.unsubscribe();


// 去掉 Reactive 之后我们可以这么理解
function subscribe(observer) {
  const id = setInterval(() => {
    observer.next('id');
  }, 1000);
  // 清理资源
  return function unsubscribe() {
    clearInterval(id);
  };
}
const unsubscribe = subscribe(x => console.log(x));
unsubscribe();

// 那为什么还要使用 Observables 呢？
// 可以异步返回多值
// 可以状态安全
