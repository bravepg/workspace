/**
 * Subscription 表示可清理的对象，用于取消 Observable 的执行
 */

const Rx = require('rxjs/Rx');

const observable1 = Rx.Observable.interval(1000);
const observable2 = Rx.Observable.interval(2000);

const subscription = observable1.subscribe(x => console.log('first: ' + x));
const childSubscription = observable2.subscribe(x => console.log('second: ' + x));

// 合并 subscription
subscription.add(childSubscription);

// 移除子 subscription
subscription.remove(childSubscription);
setTimeout(() => {
  subscription.unsubscribe();
}, 1000);
