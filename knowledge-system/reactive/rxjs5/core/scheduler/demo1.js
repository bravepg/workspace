/**
 * 调度器是一种数据结构，它知道如何根据优先级或其他标准来存储任务或者将任务进行排序
 * 调度器是执行上下文，它表示在何时何地执行任务（立即的、setTimeout、process.nextTick）
 * 调度器有一个(虚拟的)时钟
 * 
 * 调度器可以让你规定 Observable 在什么样的执行上下文中发送通知给它的观察者
 */

const Rx = require('rxjs/Rx');

const finalObserver = Rx.Observable.create(function subscribe(proxyObserver) {
  proxyObserver.next(1);
  proxyObserver.next(2);
  proxyObserver.next(3);
  proxyObserver.next(4);
})
// 指定执行上下文形式为异步执行
// 相当于在 Observable 和最终观察者 x => console.log('x', x) 之间引入了一个代理观察者
.observeOn(Rx.Scheduler.async);
console.log('finalObserver', JSON.stringify(finalObserver.observeOn));
// 上面一行代码的执行模式大概如下
// const proxyObserver = {
//   next: (val) => {
//     Rx.Scheduler.async.schedule(
//       (x) => finalObserver.next(x),
//       0 /* 延迟时间 */,
//       val /* 会作为上面函数所使用的 x */
//     );
//   }
// }

console.log('before subscribe');
finalObserver.subscribe(x => console.log('x', x));
console.log('after subscribe');
// 静态创建操作符通常可以接收调度器作为参数
// from([10, 20, 30], Rx.Scheduler.async)
