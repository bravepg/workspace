## ``Amd``
推崇依赖前置 ``Early Executing``，也就是说在提前执行依赖
```
define(['a', 'b'], function(A, B) {
  // 运行至此，a.js 和 b.js 已下载完成（运行于浏览器的 Loader 必须如此）；
  // A、B 两个模块已经执行完，直接可用（这是 AMD 的特性）；
  return function() {}
})
```
* 优点：尽早执行依赖可以尽早发现错误。上面的代码中，如果 ``a`` 模块发生异常，那么在调用 ``factory`` 方法之前一定会收到错误，一旦变成了按需加载，那么**没有使用 ``a`` 模块的分支时，便不会报错，出错了可能 ``factory`` 方法执行了一半**。尽早执行也可以带来更好的用户体验
* 缺点：如果模块没有被使用，就会造成浪费，而按需加载则不会

**顺带一提，``chrome`` 的下载就是采用了尽早执行的思想**

同时在社区经常看到的 ``CommonJS wrapping`` 其实本质没有改变
```
define(function(require, exports, module) {
  var A = require('a');

  return function () {};
});
```
去掉 ``requirejs`` 包裹的那层函数后会变成
```
define(['a'], function(require, exports, module) {
  var A = require('a');

  return function () {};
});
```
等价于
```
define(['a'], function(A) {
  return function () {};
});
```
## ``Cmd``
``cmd`` 规范有两种形式，一个是懒加载，通过 ``require.async``
```
define(function() {
  if (false) {
    require.async('./module1)   // 浏览器根本不会加载
  } else {
    require('./module2)
  }
})
```
另一个是懒执行
```
define(function() {
  if (false) {
    require('./module1)   // 浏览器根本会加载但不会执行
  } else {
    require('./module2)
  }
})
```
## 参考资料
* [再谈 SeaJS 与 RequireJS 的差异](https://div.io/topic/430)
* [AMD 的 CommonJS wrapping](https://imququ.com/post/amd-simplified-commonjs-wrapping.html)
* [SeaJS与RequireJS最大的区别](https://www.douban.com/note/283566440/)