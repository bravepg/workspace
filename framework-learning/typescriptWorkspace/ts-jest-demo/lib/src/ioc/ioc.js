"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.classFactory = exports.Injectable = void 0;
require("reflect-metadata");
// ioc 容器
var classPool = [];
// 注册该类进入容器
function Injectable() {
    return function (_constructor) {
        var paramTypes = Reflect.getMetadata('design:paramtypes', _constructor);
        console.log('paramTypes', _constructor, paramTypes);
        // 已注册
        if (classPool.indexOf(_constructor) !== -1) {
            return;
        }
        for (var _i = 0, paramTypes_1 = paramTypes; _i < paramTypes_1.length; _i++) {
            var val = paramTypes_1[_i];
            if (val === _constructor) {
                throw new Error('不能依赖自己');
            }
            else if (classPool.indexOf(val) === -1) {
                throw new Error(val + "\u6CA1\u6709\u88AB\u6CE8\u518C");
            }
        }
        classPool.push(_constructor);
    };
}
exports.Injectable = Injectable;
// 实例化工程
function classFactory(_constructor) {
    var paramTypes = Reflect.getMetadata('design:paramtypes', _constructor);
    // 参数实例化
    var paramInstance = paramTypes.map(function (val) {
        console.log('val', val, val.length);
        if (classPool.indexOf(val) === -1) {
            throw new Error(val + "\u6CA1\u6709\u88AB\u6CE8\u518C");
        }
        else if (val.length) {
            // 参数还有依赖
            return classFactory(val);
        }
        else {
            // 没有依赖直接创建实例
            return new val();
        }
    });
    // new (F.bind.apply(F, [undefined, 12]))
    // new (F.bind(undefined, 12)())
    return new (_constructor.bind.apply(_constructor, __spreadArray([void 0], paramInstance)));
}
exports.classFactory = classFactory;
