// 模块加载器
(function(global) {
  const modules = {}
  function define(id, factory) {
    if (!modules[id]) {
      modules[id] = {
        id,
        factory
      }
    }
  }

  function require(id) {
    const module = modules[id]
    console.log('module', module)
    if (!module) return
    if (!module.exports) {
      module.exports = {}
      module.factory.call(module.exports, require, module.exports, module)
    }
    return module.exports
  }
  global.define = define
  global.require = require
})(this)

// 定义模块
this.define('module', function(require, exports, module) {
  function Hello() {
    console.log('Hello')
  }
  module.exports = Hello
  // const demo = require('module')
  // demo()
})

// 加载模块
const Hello = this.require('module')
Hello()

// 这个实现的简单模块加载器与 seajs 与 requirejs 相比，主要有以下缺点
// 1. 一个模块的依赖需要等到运行时才知道，seajs 与 requirejs 都是在模块加载时就确定了依赖
// 2. 这个加载器无法自动加载依赖，也就是说在运行的时候，执行到 require 才会去加载依赖，而 seajs 与 requirejs 确定依赖的时候就已经加载
// 3. 不仅如此，无论是 seajs 还是 requirejs 都需要在运行时才能进行依赖分析，这就为前端模块化都两个目的（按需加载、合并请求）带来了矛盾，因此依赖纯前端都方式
// 是无法同时做到（按需加载、合并请求）的，需要借助分析工具（seajs 对应的是 spm，requirejs 对应的是 r.js）
// 注释内容来源：https://segmentfault.com/q/1010000005143657