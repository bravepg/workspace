什么是观察者模式

就是需要一个观察者、一个被观察的目标

并且需要把观察者传入被观察的目标中，一旦目标发生变化，就可以通知观察者做出改变

最简单的代码
```
var target = {
    observerList: [],
    addObserver(observer) {
        target.observerList.push(observer);
    },
    notify() {
        target.observerList.forEach((observer) => {
            observer.run();
        });
    }
}

// 观察目标，可以直接是个函数
var observer = {
    run() {
        console.log('观测目标通知我可以执行啦');
    }
}

target.addObserver(observer);
target.notify();
```

而发布订阅模式与观察者模式有一定的区别

它多出了事件通道的概念

事件通道一方面从发布者接受事件

一方面向订阅者发布事件

最简单代码
```
var dataHub = {
    list: {},
    listen(key, fn) {
        if (dataHub.list[key]) {
            dataHub.list[key].push(fn)
        } else {
            dataHub.list[key] = [fn]
        }
    },
    trigger(key) {
        if (dataHub.list[key]) {
            dataHub.list[key].forEach(fn => fn())
        }
    }
}

// 被观察的目标
function run() {
    console.log('我被事件通道发布啦');
}

dataHub.listen('run', run);
dataHub.trigger('run')
```

利用 ``Proxy`` 实现
```
var list = [];
function setter() {
    console.log('我被设置啦');
}
list.push(setter);

var obj = {}
var proxy = new Proxy(obj, {
    set
});

function set(target, key, value, receiver) {
    list.forEach(fn => fn());
    return Reflect.set(target, key, value, receiver);
}
```