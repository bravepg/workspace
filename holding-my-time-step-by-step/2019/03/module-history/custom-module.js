(function(global) {
  const modules = {};

  function define(moduleId, factory) {
    modules[moduleId] = {
      moduleId,
      factory
    };
  }

  function require(moduleId) {
    const module = modules[moduleId];
    if (!module) {
      return;
    }
    if (!module.exports) {
      module.exports = {}
      module.factory.call(module.exports, require, module.exports, module);
    }

    return module.exports;
  }

  global.define = define;
  global.require = require;

})(this)

this.define('hello', function(require, exports, module) {
  console.log('require', exports)
  function hello() {
    console.log('hello world');
  }

  module.exports = {
    hello
  }
});

var Hello = this.require('hello');

Hello.hello()