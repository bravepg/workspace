"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
function validate(target, key, descriptor) {
    var originalFn = descriptor.value;
    console.log('target', target, key);
    var designParamTypes = Reflect.getMetadata('design:paramtypes', target, key);
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        args.forEach(function (arg, index) {
            console.log('designParamTypes', designParamTypes);
            var paramType = designParamTypes[index];
            var result = arg.constructor === paramType || arg instanceof paramType;
            if (!result) {
                throw new Error("Failed for validating parameter: " + arg + " of the index: " + index);
            }
        });
        return originalFn.call.apply(originalFn, __spreadArray([this], args));
    };
}
var MetaData = /** @class */ (function () {
    function MetaData() {
    }
    MetaData.prototype.sayRepeat = function (word, x) {
        return Array(x).fill(word).join(' ');
    };
    __decorate([
        validate,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Number]),
        __metadata("design:returntype", void 0)
    ], MetaData.prototype, "sayRepeat", null);
    return MetaData;
}());
new MetaData().sayRepeat('hello', '');
