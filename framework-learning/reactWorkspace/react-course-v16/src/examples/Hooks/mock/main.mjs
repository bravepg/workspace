import mod, { counter } from './module.mjs';
// 通过 es6 方式导出的变量是不允许修改的
// counter = 1;

mod.person.name = 'li';
mod.counter = 1;
console.log(mod.getName());
console.log('first', mod.counter, counter);
console.log('first', mod.getCounter());
mod.incCounter();
console.log('secon', mod.counter, counter);
console.log('secon', mod.getCounter());
