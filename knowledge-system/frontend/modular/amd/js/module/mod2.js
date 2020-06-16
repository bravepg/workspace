define(function(require, exports, module) {
  console.log('mod2 loaded')

  return {
    hello: function() {
      console.log('hello mod2')
    }
  }
})