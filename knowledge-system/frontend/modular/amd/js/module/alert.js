define(function (require) {
  // 在这里，模块 dataService 已经下载并执行好
  setTimeout(() => {
    var namedModule = require('./dataService')   // 此处仅仅是取模块 dataService 的 exports
  }, 1000)
  function showMsg() {
    console.log('dataService')
  }
  return {
    showMsg
  }
});
