var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
// save the marks
var validateMap = {};
function typedDecoratorFactory(validator) {
    return function (_, key, index) {
        var _a;
        var target = (_a = validateMap[key]) !== null && _a !== void 0 ? _a : [];
        target[index] = validator;
        validateMap[key] = target;
    };
}
var isString = typedDecoratorFactory(function (x) { return typeof x === 'string'; });
var isInt = typedDecoratorFactory(function (x) { return typeof x === 'number'; });
function validate(_, key, descriptor) {
    var originalFn = descriptor.value;
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var validatorList = validateMap[key];
        args.forEach(function (arg, index) {
            var validator = validatorList[index];
            if (!validator)
                return;
            var result = validator(arg);
            if (!result) {
                throw new Error("Failed for parameter: " + arg + " of the index: " + index);
            }
        });
        return originalFn.call.apply(originalFn, __spreadArray([this], args));
    };
}
var MultipleDecorator = /** @class */ (function () {
    function MultipleDecorator() {
    }
    MultipleDecorator.prototype.sayRepeat = function (word, x) {
        return Array(x).fill(word).join('');
    };
    __decorate([
        validate,
        __param(0, isString), __param(1, isInt),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Number]),
        __metadata("design:returntype", void 0)
    ], MultipleDecorator.prototype, "sayRepeat", null);
    return MultipleDecorator;
}());
var multipleDecorator = new MultipleDecorator();
multipleDecorator.sayRepeat('hello', 2); // pass
multipleDecorator.sayRepeat('', 'lol'); // throw an error
