/**
 * Subject 是一种特殊类型的 Observables
 * Subject 是一种多播形式，将值传给多个观察者（普通的 Observables 将值传给单个观察者——每个订阅的的观察者都拥有 Observables 的独立执行）
 * 
 * Subject 还像是是 EventEmitter，内部维护着多个监听器的注册表
 * 
 * 从观察者角度而言，它没有办法区分事件或者值是来于普通 Observable 还是 Subject
 */

const Rx = require('rxjs/Rx');

const subject = new Rx.Subject();

subject.next(1); // 在 subject.subscribe 之前调用 next 是无效的

const observable = Rx.Observable.from([1, 2, 3]);
// observable.subscribe();
// Subjects 是将任意 Observable 执行共享给多个观察者的唯一方式

// observable.subscribe(subject);
// 通过调用 subscribe 不会执行 Subject
// 它相当于 addEventListener 事件监听机制
// 将观察者进行注册，内部维护一个注册列表s

// 多次 subscribe 同一个 subject，后面的调用是无效的
// 只会以第一次为准，因此打开下面注释，由于在 subject 注册之前将其传递给 observable，会导致后面的代码都无效
// observable.subscribe(subject);
subject.subscribe({
  next: (v) => console.log('observerA: ' + v),
});
subject.subscribe({
  next: (v) => console.log('observerB: ' + v),
});
observable.subscribe(subject);
