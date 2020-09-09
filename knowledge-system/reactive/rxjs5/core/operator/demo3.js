const Rx = require('rxjs/Rx');

const stream1 = Rx.Observable.from([10, 20, 30]);
const stream2 = (n) => Rx.Observable.from([n + 1, n + 2, n + 3]);

stream1.flatMap((n) => {
  console.log('n', n);
  return stream2(n);
}).subscribe({
  next: (res) => console.log(res),
  error: (err) => console.log(err),
  complete: () => console.log('finished'),
});
