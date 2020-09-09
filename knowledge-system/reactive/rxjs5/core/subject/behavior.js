/**
 * BehaviorSubjects 适合用来表示"随时间推移的值"
 * BehaviorSubjects 保存了当前发送给消费者的最新值，当有新的订阅者出现时，会将最新值发送给他
 * 生日的流是一个 Subject，但年龄的流应该是一个 BehaviorSubject 
 */

const Rx = require('rxjs/Rx');

const subject = new Rx.Subject(0);

subject.next(1);
subject.subscribe((v) => { console.log('v', v) });  // 不会保存最新值 1，无结果输出

// 初始化值
const behaviorSubject = new Rx.BehaviorSubject(0);
behaviorSubject.subscribe((v) => { console.log('obsevrer1', v) }); // 会立马输出初始化值 0
behaviorSubject.next(1);
behaviorSubject.next(2);
behaviorSubject.subscribe((v) => { console.log('obsevrer2', v) }); // 会立马输出最新值 2
