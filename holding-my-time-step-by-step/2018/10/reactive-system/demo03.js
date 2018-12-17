/**
 * 在 demo02 中，我们每次改变需要重新手动运行 target 函数
 * 那么如何在设置值之后自动调用呢，利用 defineProperty
 * 
 * 在 get 的时候，将 target 设置进入 subscribber
 * 在 set 的时候，notify 设置的函数
 */

let data = {
    price: 5,
    quantity: 2
}
let target = null;

class Dep {
    constructor() {
        this.subscribers = [];
    }

    depend() {
        if (target && this.subscribers.includes(target))
            this.subscribers.push(target);
    }

    notify() {
        this.subscribers.forEach(sub => sub());
    }
}

Object.keys(data).forEach((key) => {
    const dep = new Dep();
    let inintialValue = data[key];
    Object.defineProperty(data, key, {
        get() {
            dep.depend();
            return inintialValue;
        },
        set(newVal) {
            inintialValue = newVal;
            dep.notify();
        }
    })
});

function watcher(myFunc) {
    target = myFunc;
    target();
    target = null;
}

watcher(() => {
    data.total = data.price * data.quantity;
})