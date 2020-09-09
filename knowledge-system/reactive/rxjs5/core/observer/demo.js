/**
 * 观察者是由 Observables 发送的值的消费者
 * 观察者只是一组回调函数的集合，每个回调函数对应一种  Observable 发送的通知类型
 * next error complete
 * Subscribers have to implement the Observer interface.
 */

const Rx = require('rxjs/Rx');

const observer = {
  next: x => console.log('Observer got a next value: ' + x),
  error: err => console.error('Observer got an error: ' + err),
  complete: () => console.log('Observer got a complete notification'),
};

​const​ subscriber = Rx.Subscriber.create(
  value => console.log(​`Next: ​${value}​`​),
  error => console.log(​`Error: ​${error}​`​),
  () => console.log(​"Completed"​)
);

// 如果需要使用直接传递给 subscribe 即可

// 如果只传递了一个回调函数
// subscribe(x => console.log(x));
// 它在内部回创建一个观察者对象，并使用第一个回调函数作为 next 的处理方式
