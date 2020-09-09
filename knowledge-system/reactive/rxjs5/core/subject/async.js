/**
 * AsyncSubjects 需要等待 complete，才将最后单一值发送给观察者，跟 last() 操作符的功能类似
 */

const Rx = require('rxjs/Rx');

const asyncSubject = new Rx.AsyncSubject();

asyncSubject.subscribe(v => console.log('observer1', v));

asyncSubject.next(1);
asyncSubject.next(2);
asyncSubject.next(3);
asyncSubject.next(4);

asyncSubject.subscribe(v => console.log('observer2', v));

asyncSubject.complete();
