"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Demo = void 0;
function greeter() {
    return function (target) {
        console.log('Hello', target.name);
    };
}
var Demo = /** @class */ (function () {
    function Demo() {
        // todo
        this.x = 1;
    }
    Demo = __decorate([
        greeter()
    ], Demo);
    return Demo;
}());
exports.Demo = Demo;
function formatStr(s) {
    return s.toUppercase();
}
// 匿名函数的参数可以不声明类型
var names = ["Alice"];
names.forEach(function (s) {
    s.toUpperCase();
});
