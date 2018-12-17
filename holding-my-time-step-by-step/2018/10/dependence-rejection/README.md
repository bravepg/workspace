## 问题来源
假设我们现在有两个函数
```
var service = function() {
    return { name: 'Service' };
}
var router = function() {
    return { name: 'Router' };
}
```
如果我们有一个函数需要用到这两个模块
```
var doSomething = function(other) {
    var s = service();
    var r = router();
};
```
如果我们想使用 ``ServiceXML`` 或者其他的函数呢，我们需要通过编写函数体来解决，显然不够灵活

首先我们可以通过函数的参数依赖性来解决
```
var doSomething = function(service, router, other) {
    var s = service();
    var r = router();
};
```
如果我们有很多地方都是用了这个方法，后面一旦参数发生改变，就会所以的 ``doSomething`` 都需要改变也不够灵活

## 解决方式
我们可以使用依赖注入来解决

* 我们应该能够注册依赖关系
* 注入应该接受一个函数，并返回一个我们需要的函数
* 注入应该保持被传递函数的作用域
* 被传递的函数应该能够接受自定义参数，而不仅仅是依赖描述

## 发散思考
在 ``React`` 中 ``ReactDefaultBatchingStrategy`` 试过第一种最简单的参数形式实现依赖注入的，因此它具有一定的耦合性，要是说利用依赖注入用的最好的框架，那肯定是 ``Angular``