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
Object.defineProperty(exports, "__esModule", { value: true });
var myIoc_1 = require("./myIoc");
var C = /** @class */ (function () {
    function C() {
    }
    C.prototype.sayHello = function () {
        console.log("hello");
    };
    C = __decorate([
        myIoc_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], C);
    return C;
}());
var B = /** @class */ (function () {
    function B(c) {
        this.c = c;
        this.c = c;
    }
    B.prototype.sayHello = function () {
        this.c.sayHello();
    };
    B = __decorate([
        myIoc_1.Injectable(),
        __metadata("design:paramtypes", [C])
    ], B);
    return B;
}());
var A = /** @class */ (function () {
    function A(b) {
        this.b = b;
        console.log('b', b);
        b.sayHello();
    }
    A = __decorate([
        myIoc_1.Injectable(),
        __metadata("design:paramtypes", [B])
    ], A);
    return A;
}());
// 产生实例
var a = myIoc_1.classFactory(A);
