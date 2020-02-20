let { mod, counter } = require('./module');

mod.person = 'li';
mod.counter = 1;

// 通过 mod.person 的方式直接修改引用，会切断与 module 中 person 的关联
// 导致输出的仍然是 gao
// 一旦通过 mod.person.name = 'li' 这种方式，修改的就是 module 中 person 的属性
// 这也证明了 module.exports 的拷贝是值拷贝，对于引用类型来说，是引用地址的拷贝
console.log(mod.getName()); // gao
// mod.person.name = 'li';
// console.log(mod.getName()); // li
console.log('first', mod.counter, counter);
console.log('first', mod.getCounter());
mod.incCounter();
console.log('secon', mod.counter, counter);
console.log('secon', mod.getCounter());
