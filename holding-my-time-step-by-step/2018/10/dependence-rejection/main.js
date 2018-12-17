var service = function() {
    return { name: 'Service' };
}
var router = function() {
    return { name: 'Router' };
}

// var injector = {
//     dependencies: {},
//     register: function(key, value) {
//         injector.dependencies[key] = value
//     },
//     resolve: function(deps, func, scope) {
//         var args = [];
//         for (var i = 0; i < deps.length; i++) {
//             var d = deps[i];
//             if (injector.dependencies[d]) {
//                 args.push(injector.dependencies[d])
//             }
//         }
//         return function() {
//             func.apply(scope || {}, args.concat(Array.prototype.slice.call(arguments, 0)));
//         }
//     }
// }
// injector.register('service', service);
// injector.register('router', router);
// injector.resolve(['service', 'router'], function (service, router) {
//     console.log(service().name, router().name);
// });
/**
 * 擅用 scope
 */
var injector = {
    dependencies: {},
    register: function(key, value) {
        injector.dependencies[key] = value
    },
    resolve: function(deps, func, scope) {
        var args = [];
        for (var i = 0; i < deps.length; i++) {
            var d = deps[i];
            if (injector.dependencies[d]) {
                scope[d] = injector.dependencies[d]
            }
        }
        return function() {
            func.apply(scope || {}, Array.prototype.slice.call(arguments, 0));
        }
    }
}
injector.register('service', service);
injector.register('router', router);
injector.resolve(['service', 'router'], function (service, router) {
    // 此处使用 this 是因为将 this 绑定在了 scope 上
    console.log(this.service().name, this.router().name);
});



/**
 * 上述代码的缺点是：我们需要写所需要部件两次，并且不能混淆顺序，比如
 * injector.resolve(['service', 'router'], function (service, router) {
 * 
 * })
 * 这里参数 service、router 被重复写了两次，并且不能混淆顺序
 * 并且其他参数只能放在最后
 */

// var injector = {
//     dependencies: {},
//     register: function(key, value) {
//         this.dependencies[key] = value;
//     },
//     resolve: function() {
//         var func,
//             deps,
//             scope,
//             args = [],
//             self = this;
//         func = arguments[0];
//         scope =  arguments[1] || {};
//         deps = func.toString().match(/^function\s*[^\(]*\(\s*([^\)]*)\)/m)[1].replace(/ /g, '').split(',');
//         return function () {
//             var a = Array.prototype.slice.call(arguments, 0);
//             for (var i = 0; i < deps.length; i++) {
//                 var d = deps[i];
//                 args.push(self.dependencies[d] && d != '' ? self.dependencies[d] : a.shift());
//             }
//             func.apply(scope || {}, args);
//         }
//     }
// }