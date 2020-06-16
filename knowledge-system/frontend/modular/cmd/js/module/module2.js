define(function(require, exports, module) {
  setTimeout(() => {
    // 不可直接传递变量
    // 只能通过静态分析方式实现
    // const path = './module1'
    // const module1 = require(path)
    // const module1 = require('./module1')
  }, 1000)
  // console.log('同步引入依赖模块1')
  // module1.show()
  // 引入依赖模块(异步)
  // require.async('./module1', function (module1) {
  //   console.log('异步引入依赖模块1')
  //   module1.show()
  // })
})