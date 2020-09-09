/**
 * ReplaySubjects 类似于 BehaviorSubjects
 * 它还具有的功能是保存最近几个值传递给新的订阅者
 * 
 * ReplaySubject(count, delayTime)
 * 
 * count 表示最近几个值
 * delayTime 表示这个时间的值，约束力以后者为准
 */
const Rx = require('rxjs/Rx');

// 缓存 3 个值
const replaySubject = new Rx.ReplaySubject(3);

replaySubject.subscribe((v) => { console.log('observer1', v) });
replaySubject.next(1);
replaySubject.next(2);
replaySubject.next(3);
replaySubject.next(4);

replaySubject.subscribe((v) => { console.log('observer2', v) }); // 会立即输出最近3个值 2、3、4
replaySubject.next(5);

const replaySubject2 = new Rx.ReplaySubject(100, 500);
replaySubject2.subscribe({
  next: (v) => console.log('observerA: ' + v)
});

var i = 1;
setInterval(() => replaySubject2.next(i++), 200);

// 虽然设置了 100 个，但是设置了时间是 500ms，只观测到 3、4
setTimeout(() => {
  replaySubject2.subscribe((v) => { console.log('observerB', v) });
}, 1000);
