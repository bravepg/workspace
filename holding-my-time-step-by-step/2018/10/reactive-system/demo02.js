/**
 * 在 demo01 中，我们已经手动维护了 target
 * 如果我们想扩展功能，我们可以继续扩展 target
 * 
 * 现在出现了一种更加优秀的方案，就是将 target 列表维护在类中
 */

class Dep {
    constructor() {
        this.subscribers = [];
    }

    depend() {
        if (target && !this.subscribers.includes(target)) {
            this.subscribers.push(target);
        }
    }

    notify() {
        this.subscribers.forEach(sub => sub());
    }
}

const dep = new Dep();

let price = 5;
let quantity = 2;
let total = 0;
let target = null;
target = () => {
    total = price * quantity;
}

dep.depend();
target();

price = 20;
console.log(total);
dep.notify();
console.log(total);


/**
 * 上面的代码中，我们将最开始的代码封装到了 Dep 类中
 * 比较奇怪的是 我们每次需要手动设置和运行 target
 * 
 * 我们通过观察者函数来解决这个问题
 */

watcher(() => {
    total = price * quantity;
})

function watcher(myFunc) {
    target = myFunc;
    dep.depend();
    target();
    target = null;
}