/**
 * 操作符是纯函数，它接受一个 Observable 作为输入，返回一个 Observable
 * 
 * 订阅输出 Observable 同样会订阅输出 Observable
 */

const Rx = require('rxjs/Rx');

function multiplyByTen(input) {
  const output = Rx.Observable.create(function subscribe(observer) {
    input.subscribe({
      next: (v) => observer.next(v * 10),
      error: (v) => observer.error(v),
      complete: () => observer.complete(),
    });
  });
  
  return output;
}

// 订阅输出 Observable 会执行 out，同样会订阅输入 Observable
// 称之为订阅操作符链
const input = Rx.Observable.from([1, 2, 3, 4]);
const out = multiplyByTen(input);

out.subscribe((v) => console.log(v));
