/**
 * __dirname === path.dirname(__filename)
 */

(function (global) {
    var modules = {};
    function define(id, factory) {
        if (!modules[id]) {
            modules[id] = {
                id: id,
                factory: factory,
            };
        }
    }

    function require(id) {
        var module = modules[id];
        if (!module) {
            return;
        }
        if (!module.exports) {
            module.exports = {};
            module.factory.call(module.exports, require, module.exports, module);
        }
        console.log(module);
        return module.exports;
    }

    global.define = define;
    global.require = require;
})(this);
this.define('module', function(require, exports, module) {
    function sayHello() {
        console.log('hello modules');
    }
    module.exports = {
        sayHello : sayHello
    }
});


var Hello = this.require('module');
Hello.sayHello();