(function() {
  require.config({
    baseUrl: 'js/',
    paths: {
      alert: './module/alert',
      dataService: './module/dataService',
      // mod1: './module/mod1',
      // mod2: './module/mod2',
    }
  })
  const alert = 'alert'
  require([alert], function(alert) {
    alert.showMsg()
  })
  // require(['mod1', 'mod2'], function() {})
})()


// 测试 requirejs 的执行顺序
define(function(require, exports, module) {
  console.log('main loaded')

  const mod1 = require('./module/mod1')
  mod1.hello();
  const mod2 = require('./module/mod2')
  mod2.hello();
})
// mod1 loaded
// mod2.js:2 mod2 loaded
// main.js:18 main loaded
// mod1.js:6 hello mod1
// mod2.js:6 hello mod2
