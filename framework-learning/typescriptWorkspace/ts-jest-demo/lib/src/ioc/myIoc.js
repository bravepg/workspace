"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.classFactory = exports.Injectable = void 0;
require("reflect-metadata");
var classPool = [];
var Injectable = function () {
    return function (_constructor) {
        // 如果当前类已经注册
        if (classPool.indexOf(_constructor) !== -1) {
            return;
        }
        var designTypes = Reflect.getMetadata('design:paramtypes', _constructor);
        console.log('designTypes', designTypes);
        for (var _i = 0, designTypes_1 = designTypes; _i < designTypes_1.length; _i++) {
            var val = designTypes_1[_i];
            if (val === _constructor) {
                throw new Error('自己不能依赖自己');
            }
            if (classPool.indexOf(val) === -1) {
                throw new Error('该类尚未被注册');
            }
        }
        classPool.push(_constructor);
    };
};
exports.Injectable = Injectable;
function classFactory(_constructor) {
    var designTypes = Reflect.getMetadata('design:paramtypes', _constructor);
    console.log(designTypes);
    var params = designTypes.map(function (val) {
        console.log('val', val, val.length);
        // 直接通过函数参数的长度判断
        if (val.length) {
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
    // https://www.yuque.com/docs/share/f9350b61-cfa6-49c7-9d09-606a6599b848?# 《02-this相关》
    return new (_constructor.bind(...__spreadArray([_constructor], params)));
    // return new (_constructor.bind.apply(_constructor, __spreadArray([_constructor], params)));
}
exports.classFactory = classFactory;
