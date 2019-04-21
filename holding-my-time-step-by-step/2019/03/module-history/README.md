探究一下模块化的本质
### 首先谈谈为什么需要前端模块化

如果没有进行前端模块化，那么一个项目通常会随着时间的变长而变得越来越复杂，直到不可维护

进行模块化可以更好的进行代码维护与复用

在软件工程中：模块化不仅仅是复用，无论你将来是否要复用代码，你都应该将其分治为一个模块（分而治之）

### 那么什么才是代码模块化呢
提到了组合的思想，将一个项目拆分成多个模块，然后将多个模块组合在一起，是不是就是函数式编程中提到的（组合优于继承的思想呢）

### 进行模块化的几种方式
**如何引入模块？如何暴露模块？**
#### 刀耕火种的时代
* 全局 ``function``

我们都知道，一个模块的最小粒度我们可以认为是一个函数，因此最古老的模块化可以认为是，全局声明了很多的函数，然后进行调用
* ``namespace`` 出现

一直写着 ``fucntion`` ，有一天你会发现，起名字是个大问题了，因为随着功能增加，名字有可能变得重复，那么怎么办呢？给他一个命名空间，让他们都有一个归属感，不再继续在全景模式下裸奔
```
let moduleOne = {
  data: 'module one data',
  foo() {
    console.log(`foo() ${this.data}`)
  },
  bar() {
    console.log(`bar() ${this.data}`)
  }
}
```
* ``IIFE`` 模式

哇，突然觉得上述方式是不是无敌了，但是在ES6之前不存在块级作用域的概念，会污染作用域，那么就可以使用这种模式来处理
```
(function (window) {
  //数据
  var data = 'IIFE module data'

  //操作数据的函数
  function foo() { //用于暴露的函数
    console.log(`foo() ${data}`)
  }

  function bar() {//用于暴露的函数
    console.log(`bar() ${data}`)
    otherFun() //内部调用
  }

  function otherFun() { //内部私有的函数
    console.log('privateFunction go otherFun()')
  }

  //暴露foo函数和bar函数
  window.moduleOne = {foo, bar}
})(window)
```

#### 现代化的浏览器模块化方案
如果当前这个模块依赖另一个模块怎么办? 假设我需要使用 ``jquey``，利用上述 ``IIFE`` 我们可能会这样写
```
<script type="text/javascript" src="jquery-1.10.1.js"></script>
<script type="text/javascript" src="module1.js"></script>

// module1.js
(function (window, $) {
  //数据
  var data = 'IIFE module data'

  //操作数据的函数
  function foo() { //用于暴露的函数
    console.log(`foo() ${data}`)
  }

  function bar() {//用于暴露的函数
    console.log(`bar() ${data}`)
    otherFun() //内部调用
  }

  function otherFun() { //内部私有的函数
    console.log('privateFunction go otherFun()')
  }

  //暴露foo函数和bar函数
  window.moduleOne = {foo, bar}
})(window, $)
```
一旦 ``JS`` 多了起来，执行顺序要怎么维护就变成了一个很大的问题，那么解决方法也随之出来了
* ``CommonJS``

服务器端 ``NodeJS`` 就是基于该规范实现的，浏览器端 ``browserify`` 就是基于该规范实现的
* ``AMD``

``CommonJS`` 的加载是同步的，在服务端是没有问题的，但是浏览器端很容易阻塞，那么 ``AMD`` 规范就是为了解决这个问题，代表的产品就是 ``require.js``

* ``CMD``

基于 ``CMD`` 规范的 ``seajs`` 其实和 ``require.js`` 一样都是为了解决浏览器端的同步执行问题

但是 ``seajs`` 推崇依赖就近原则，``require.js`` 推崇依赖前置，提前执行
* ``ES6`` 模块化

浏览器和服务端的通用解决方案


**软件工程：模块化是组件化的基石**

组件化和模块化的思想都是分而治之的思想

组件化更倾向于UI层面上，一个页面是由众多组件组成的，类似于搭积木一样

模块化更加倾向于功能或者数据的封装，一般由几个组件或1个组件构成的带有一定功能的集合体
