var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
function logger(target, propKey, descriptor) {
    console.log('target', target, propKey, descriptor);
    var original = descriptor.value;
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log.apply(console, __spreadArray(['params: '], args));
        var result = original.call.apply(original, __spreadArray([this], args));
        console.log('result3: ', result);
        return result;
    };
}
function logger2(target, propKey, descriptor) {
    console.log('target2', target, propKey, descriptor);
    var original = descriptor.value;
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log.apply(console, __spreadArray(['params2: '], args));
        var result = original.call.apply(original, __spreadArray([this], args));
        console.log('result2: ', result);
        return result;
    };
}
var MethodC = /** @class */ (function () {
    function MethodC(value) {
        this.number = value;
    }
    // 洋葱圈模型
    // 入参包括 prototype key keyDescriptor
    MethodC.prototype.add = function (x, y) {
        return x + y;
    };
    __decorate([
        logger,
        logger2,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, Number]),
        __metadata("design:returntype", void 0)
    ], MethodC.prototype, "add", null);
    return MethodC;
}());
var methodC = new MethodC(3);
methodC.add(1, 2);
methodC.add(1, 3);
