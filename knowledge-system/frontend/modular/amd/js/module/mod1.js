define(function(require, exports, module) {
  console.log('mod1 loaded')

  return {
    hello: function() {
      console.log('hello mod1')
    }
  }
})