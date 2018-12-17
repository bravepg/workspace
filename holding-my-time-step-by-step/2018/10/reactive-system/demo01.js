/**
 * 首先 JavaScript 并不是响应式的
 * 因此我们考虑如何实现一个类似 Vue 的响应式系统呢
 * 首先，我们想到的是存储操作
 * 
 * 我们通过记录来执行此操作，以便我们可以再次运行
 */

let price = 5;
let quantity = 2;
let total = 0;
let target = null;

// 存储函数
let storage = [];
target = () => {
    total = price * quantity;
}
function record() {
    storage.push(target);
}
function reply() {
    storage.forEach(run => run());
}

record();
target();

price = 20;
console.log(total);
reply();
console.log(total);