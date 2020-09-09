const Rx = require('rxjs/Rx');

// 1. 定义 Observable
const source = Rx.Observable.interval(500);
// 2. 定义 Subject
const subject = new Rx.Subject();
let subscribtion1, subscribtion, subscriptionConnect;

// // 3. 实现 Observable 的多播功能
// const multicasted = source.multicast(subject);

// // 4. 注册 observer1，并返取消事件
// subscribtion1 = multicasted.subscribe({
//   next: (v) => { console.log('observer1', v) },
// });

// // 5. 返回共享取事件
// subscriptionConnect = multicasted.connect();

// // 6. 注册 observer2
// // 返回取消事件（为什么要放在 setTimeOut 中）
// // 因为 Observable 是异步产生数据流，需要在返回第一个之后在监听
// setTimeout(() => {
//   subscribtion2 = multicasted.subscribe({
//     next: (v) => { console.log('observer2', v) },
//   });
// }, 600);

// // 7. 取消 observer1
// setTimeout(() => {
//   subscribtion1.unsubscribe();
// }, 1200);

// // 8. 取消 observer2
// setTimeout(() => {
//   subscribtion2.unsubscribe();
//   subscriptionConnect.unsubscribe();
// }, 2000);

/**
 * 上述的流程需要我们手动调用 connect，非常繁琐
 * 如果不想显示的调用 count()，可以使用 refCount()
 * 
 * refCount 的作用是: 当有第一个订阅者时，多播 Observables 开始执行，当最后一个订阅者离开时，多播 Observables 会停止执行
 */
const refCounted = source.multicast(subject).refCount();

subscribtion1 = refCounted.subscribe({
  next: (v) => { console.log('observer1', v) },
});

setTimeout(() => {
  subscribtion2 = refCounted.subscribe({
    next: (v) => { console.log('observer2', v) },
  });
}, 600);

setTimeout(() => {
  subscribtion1.unsubscribe();
}, 1200);

setTimeout(() => {
  subscribtion2.unsubscribe();
}, 2000);
