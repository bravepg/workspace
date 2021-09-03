var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


function ClasstoString(BaseClass) {
    console.log('未调用 class C 也会执行');
    // 如果没有定义 return，则会使用 BaseClass
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.num = 23;
            return _this;
        }
        class_1.prototype.toString = function () {
            return JSON.stringify(this) + "---demo";
        };
        return class_1;
    }(BaseClass));
}
var Base = /** @class */ (function () {
    function Base() {
    }
    return Base;
}());
// declare function ClasstoString<T>(BaseClass: T): T & {
//   foo1: number;
// };
// 很有意思
// 1. 如果只写函数名称 ClasstoString，那么函数定义必须按照规范来，即 function ClasstoString<T extends Constructor>(BaseClass: T)
// 2. 但是一旦通过调用的方式 ClasstoString()，书写方式便变得非常自由
var C = /** @class */ (function (_super) {
    __extends(C, _super);
    function C() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.foo = "foo";
        _this.num = 24;
        return _this;
    }
    C = __decorate([
        ClasstoString
    ], C);
    return C;
}(Base));
console.log(new C().foo1);
