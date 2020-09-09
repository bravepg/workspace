/**
 * 了解了使用 Subject 可以实现 Observable 进行多播的原理
 * 
 * 其实 Rx 本身对这个行为进行了封装，暴露出 muticast 接口
 */

const Rx = require('rxjs/Rx');

const source = Rx.Observable.from([1, 2, 3]);
const subject = new Rx.Subject();

source.multicastMock = function(subject) {
  return {
    subscribe: (...param) => {
      subject.subscribe(...param);
    },
    connect: () => {
      this.subscribe(subject);
      return () => {
        this.unsubscribe();
      }
    }
  }
}

const multicasted = source.multicastMock(subject);

multicasted.subscribe({
  next: (x) => console.log('x', x),
});
multicasted.subscribe({
  next: (y) => console.log('y', y),
});

multicasted.connect();
