/**
 * Observable 可观察对象的使用场景
 * 
 * 在 JS 中，获取对象有推模式和拉模式
 * 
 * ----------------------------
 * 类型|  单个值   | 多个值
 * ----------------------------
 * 拉取| Function | Iterator 
 * ----------------------------
 * 推送| Promise  | Observable 
 * ----------------------------
 * 
 * 推送和拉取是两种不同的协议，用来描述生产者和消费者之间是如何进行通信的
 * 在拉取体系中，由消费者决定何时从生产者那里获取数据，生产者本身并不知道消费者何时消费数据
 * （拉取体系都是同步获取数据的）
 * 每个 JavaScript 函数都属于拉取体系，函数是数据的生产者，调用该函数的代码从函数调用中获取单一的返回值来对其进行消费
 * Iterator 是另一种拉取体系，通过 iterator.next 来获取的多个值
 * 
 * 在推送体系中，由生产者决定何时把数据发送给消费者，消费者本身并不知道何时会接收数据
 * （推送体系可能是同步或者异步产生数据）
 * Promise 将一个解析后的值最为参数传递给已注册的回调函数中，但是传递时机是由 Promise 决定的
 * Obervables 是另一种推送体系，它是多个值的生产者
 * ----------------------------
 * 类型|  生产者   | 消费者
 * ----------------------------
 * 拉取| 被动(被请求产生数据) | 主动(决定何时请求)
 * ----------------------------
 * 推送| 主动(主动产生数据)   | 被动(被动接收数据)
 * ----------------------------
 */

const Rx = require('rxjs/Rx');
const observable = Rx.Observable.create(function (observer) {
  observer.next(1);
  observer.next(2);
  observer.next(3);
  setTimeout(() => {
    observer.next(4);
    observer.complete();
  }, 2000);
});

console.log('just before subscribe');

observable.subscribe({
  next: x => console.log('get value' + x),
  error: err => console.error('something wrong occurred: ' + err),
  complete: () => console.log('done'),
});

console.log('just after subscribe');
