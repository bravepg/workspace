define(function(require, exports, module) {
  const data = 'baidu'
  function show() {
    console.log('baidu')
  }
  console.log('module1 load')
  exports.show = show
})