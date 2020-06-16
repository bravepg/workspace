一直以来对模块化这个概念既熟悉又有点陌生，仔细想想原因，第一点是自己了解的太少，第二点就是缺少了体系化结构，那么最近重新捡起来让自己认真学习一下
### 模块
  模块是一个设计术语，是能够单独命名并独立完成一定功能的程序的语句的集合。它包括两个基本的特征
  * 外部特征：其他模块或程序调用该模块的方式（包括输入输出参数、引用的全局变量）和该模块的功能
  * 内部特征：模块的局部数据和程序代码（逻辑）
### 模块化
  来自百度百科的解释：模块化是指在解决一个复杂问题时，自顶向下逐层把系统划分成若干模块的过程，模块有多种属性，分别反映外部特性与内部特性
### 发展历程
  * 全局 ``function`` 模式
  **在程序设计中，我们可以认为一个模块的最小粒度是函数**，因此最早期的模块就是将不同的功能封装成不同的全局函数
  ```
  function m1() {}
  function m2() {}
  ```
  这种模式带来的最大的问题就是：**命名很容易冲突，各个模块之间的关系不容易看出来**
  * ``namespace`` 模式
  为了解决上述**全局 ``function`` 模式**所带来的问题，我们将模块进行了简单封装
  ```
  const myModule = {
    data: 'google',
    do: function() {
      console.log(`${data}`)
    }
  }
  myModule.data = 'baidu'
  myModule.do()
  ```
  这种模式减少了全局变量，解决了命名很容易冲突的问题，但是就像代码展示的那样，外部很容易修改模块内部的数据
  * ``IIFE`` 模式，匿名函数自调用(闭包)
  为了解决上述提到的外部容易修改模块成员的问题，我们采用了匿名函数自调用
  ```
  (function(window) {
    const myModule = {
      data: 'google',    // 外部是无法获取 data 属性的
      do: function() {
        console.log(`${data}`)
      }
    }
  })(window)
  ```
  如果这个匿名函数自调用模块对其他模块存在依赖怎么办呢？采用 ``IIFE`` 模式增强 : 引入依赖
  * ``IIFE`` 模式增强 : 引入依赖
  (function(window, $) {
    // ...
  })(window, jQuery)
  这样使用的方式必须要让 jquery 在该模块使用之前引入
  ```
  <script type="text/javascript" src="jquery-1.10.1.js"></script>
  <script>
    (function(window, $) {
      // ...
    })(window, jQuery)
  </script>
  ```
  通过 ``script`` 这种方式引入依赖，一两个这样的模块还可以接受，一旦模块多了起来，``script`` 的依赖关系变得极其模糊而且难以维护
### 模块化的优势
  * 避免命名冲突
  * 按需加载
  * 更高的复用性
  * 更好的维护性
### 模块化的规范
  上面说到，模块化具有很多的优势，但是历史的模块化发展进程到达 ``script`` 后出现了依赖关系变得极其模糊而且难以维护的问题，那么怎么去解决这些问题呢，模块化规范便粉墨登场
  * ``commonjs``
  概述：``commonjs`` 规范是服务端规范，``nodejs`` 就实现了这样的规范

  核心思想：一个文件就是一个单独的模块，通过 ``require`` 方法来同步加载要依赖的模块，然后通过 ``exports`` 或者 ``module.exports`` 来导出需要暴露的接口
  ```
  require("module");
  require("../file.js");
  exports.doStuff = function() {};
  module.exports = someValue;
  ```
  特点：
    * 所有的代码都在模块作用域，不会污染全局作用域
    * 模块可以多次加载，加载一次后结果就会被缓存
  加载机制： **输出的是值拷贝**，跟 ``es6`` 规范不一样

  我们上面已经提到过，``commonjs`` 为服务端而生，那么如果真的想在浏览器端使用怎么办呢？社区不安分的大佬们创造了 ``browserify`` 来将代码打包编译即可使用在浏览器上

  总结：
    * ``commonjs`` 模块的运行是同步加载的
    * ``commonjs`` 为服务端而生，如果想在浏览器中运行，需要提前进行编译打包处理
  **``commonjs``模块的运行既然是同步的，也就是说只有加载完成才能执行后面的操作，虽然 ``browserify`` 一定上满足了可以运行在浏览器端，但是同步加载的本质还没有改变，并且，它需要提前进行打包编译（分析依赖，有的时候打出来的包会很大）这对浏览器来说是不能接受的（服务端模块文件一般存在于本地，浏览器环境需要从服务端端下载模块加载）**
    * 注意一点 ``browserify`` 这种将代码打包编译以满足代码运行在客户端的方式要晚于 ``amd`` 和 ``cmd``
  * ``amd``
  就像上面提到的那样，异步模块加载规范不需要提前打包，它可以提供一个实时加载器
  ```
  define(function() {
    const msg = 'baidu'
    function getMsg() {
      return msg.toUpperCase()
    }
    return {
      getMsg
    }
  });
  ```
  ```
  define([
    'dataService'
  ], function(dataService) {
    // 在这里，模块 dataService 已经下载并执行好
    setTimeout(() => {
      var namedModule = require('./dataService')   // 此处仅仅是取模块 dataService 的 exports
    }, 1000)
    function showMsg() {
      console.log('dataService', dataService.getMsg())
    }
    return {
      showMsg
    }
  })
  ```
  正如上面所提到的那样，``requirejs`` 之所以没有被社区所认可的主要原因就是 ``amd`` 是 ``Early Executing``，其他的都是 ``require`` 时才执行，于是玉伯老师创建了 ``seajs``
  * ``cmd``
  遵循 ``cmd`` 的模块化规范化最好的库应该是 ``seajs`` 了吧，他推崇依赖就近的原则
  ```
  define(function(require, exports, module) {
    const data = 'baidu'
    function show() {
      console.log('baidu')
    }
    console.log('module1 load')
    exports.show = show
  })
  ```
  ```
  define(function(require, exports, module) {
    // 在这里，模块 module1 已经下载但不会执行
    setTimeout(() => {
      const module1 = require('./module1')  // 
    }, 1000)
    // console.log('同步引入依赖模块1')
    // module1.show()
    // 引入依赖模块(异步)
    // require.async('./module1', function (module1) {
    //   console.log('异步引入依赖模块1')
    //   module1.show()
    // })
  })
  ```
  * ``umd``
  简单的一个小插曲，``umd`` 是 ``amd`` 和 ``commonjs`` 的糅合，目的是解决跨平台的问题
  * ``es6``
  这里先加一个小插曲，无论是 ``amd`` 还是 ``cmd`` 从历史的发展眼光来看无疑是浏览器一些本身处理机制的缺陷所带来的产物，``umd`` 和 ``browserify``都是为了解决跨平台的问题而做出的努力，``es6`` 的到来彻底颠覆了之前的模块化开发方式

  核心思想：``es6`` 模块的设计思想是尽量静态化，使得编译时就能确定模块的依赖关系，``commonjs``、``amd``、``cmd`` 都是在运行时才可以确定
  那么 ``es6`` 为什么可以在静态分析阶段就能确定依赖关系呢
    * ``import`` 的模块名只能是字符串常量
    * ``import binding`` 是 ``immutable`` 的，类似 ``const``
    * 只能作为模块顶层的语句出现，不能出现在 ``function`` 里面或是 ``if`` 里面等块级作用域中
    * ``import hoisted``，不管 ``import`` 的语句出现的位置在哪里，在模块初始化的时候所有的 ``import`` 都必须已经导入完成
  以上特性使得 ``ES6`` 缺少了一定的灵活性，但使得所有的依赖都是确定的，能够对代码进行静态分析，不需要靠运行时确定依赖关系

### 模块化展望
模块的加载和传输有两种极端的方式
  * 一种就是每个模块文件都单独请求（每个模块都单独发起请求会导致应用启动速度慢）
  * 另一种就是把所有模块打包成一个文件然后只请求一次（会导致流量浪费，初始化过程慢）
理想的打包方式应该是：按需进行懒加载，增量更新，如果要实现模块的按需加载，需要对代码块中的模块进行静态分析、编译打包

静态分析、动态分析


纯前端方式只能在运行时分析依赖关系

而模块化管理的重点就在于**按需加载**、**请求合并** 和 **依赖管理**

### 模块化工具
  * ``browserify``
  * ``webpack``
  * ``parcel``
  * ``broswer``

### 参考资料
* [js文件如何按需加载](https://segmentfault.com/q/1010000005143657)
* [前端工程与模块化框架](https://github.com/fouber/blog/issues/4)
* [前端模块化开发那点历史](https://github.com/seajs/seajs/issues/588)
* [论ES6模块系统的静态解析](https://hax.iteye.com/blog/1829042)