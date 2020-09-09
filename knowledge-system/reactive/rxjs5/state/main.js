const Rx = require('rxjs/Rx');

// let evenTicks = 0;

// function updateDistance(i) {
//   if (i % 2 === 0) {
//     evenTicks += 1;
//   }
//   return {
//     evenTicks,
//     i,
//   };
// }

// const ticksObservable = Rx.Observable.interval(1000).map(updateDistance);

// ticksObservable.subscribe((result) => {
//   console.log(`subscriber 1 -- ${result.evenTicks} so far`);
// });

// ticksObservable.subscribe((result) => {
//   console.log(`subscriber 2 -- ${result.evenTicks} so far`);
// });

// subscriber 1 -- 1 so far
// subscriber 2 -- 2 so far
// subscriber 1 -- 2 so far
// subscriber 2 -- 2 so far
// subscriber 1 -- 3 so far

// 上述代码由于共享外部状态，导致 evenTicks 每次都会增加 2 次

function updateDistance(acc, i) {
  if (i % 2 === 0) {
    acc += 1;
  }
  return acc;
}

const ticksObservable = Rx.Observable.interval(1000).scan(updateDistance, 0);

ticksObservable.subscribe((acc) => {
  console.log(`subscriber 1 -- ${acc} so far`);
});

ticksObservable.subscribe((acc) => {
  console.log(`subscriber 2 -- ${acc} so far`);
});
