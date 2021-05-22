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
var ClassGreeter = /** @class */ (function () {
    function ClassGreeter(otherName) {
        this.rName = 'world';
        if (otherName !== undefined) {
            this.rName = otherName;
        }
    }
    return ClassGreeter;
}());
var g = new ClassGreeter('hello');
console.log(g.rName);
var ClassNameChecker = /** @class */ (function () {
    function ClassNameChecker() {
    }
    ClassNameChecker.prototype.check = function (s) {
        // Parameter 's' implicitly has an 'any' type.
        // Notice no error here
        return s.toLowercse() === "ok";
    };
    return ClassNameChecker;
}());
// Property 'y' does not exist on type 'ClassNameChecker'.
// new ClassNameChecker().y
var ClassBase = /** @class */ (function () {
    function ClassBase() {
        this.privateName = 'privte';
        this.privateName2 = 'privte2';
        this.name = 'base';
        this.m = 10;
        console.log("My name is " + this.name, this.privateName, this.privateName2);
    }
    ClassBase.prototype.sum = function () {
        return this.privateName + this.privateName2;
    };
    ClassBase.prototype.getName = function () {
        return this.name + this.sum();
    };
    ;
    ClassBase.staticName = 'static';
    return ClassBase;
}());
var ClassDerived = /** @class */ (function (_super) {
    __extends(ClassDerived, _super);
    function ClassDerived() {
        var _this = _super.call(this) || this;
        _this.name = "derived";
        _this.m = 15;
        return _this;
    }
    ClassDerived.prototype.getName2 = function () {
        _super.prototype.getName.call(this);
    };
    return ClassDerived;
}(ClassBase));
var classDerived = new ClassDerived();
// const getName = classDerived.getName;
console.log(classDerived.m, classDerived.getName());
var ClassMsgError = /** @class */ (function (_super) {
    __extends(ClassMsgError, _super);
    function ClassMsgError(m) {
        var _this = _super.call(this, m) || this;
        Object.setPrototypeOf(_this, ClassMsgError.prototype);
        return _this;
    }
    ClassMsgError.prototype.sayHello = function () {
        return "hello " + this.message;
    };
    return ClassMsgError;
}(Error));
var classMsgError = new ClassMsgError('world');
// console.log(classMsgError.sayHello());
var ClassBox = /** @class */ (function () {
    // can’t have type parameters
    function ClassBox(value) {
        this.contents = value;
    }
    return ClassBox;
}());
var b = new ClassBox("hello!");
