function greeter(fn) {
    fn('Hello');
}
function printToConsole(s) {
    console.log(s);
}
greeter(printToConsole);
function doSomething(fn) {
    console.log(fn.description + " returned " + fn(6));
}
function firstElement(arr) {
    return arr[0];
}
// Type 'number' is not assignable to type 'String'
// firstElement<string>(["a", "b", 1]);
function map(arr, func) {
    return arr.map(func);
}
map(["1", "2", "3"], function (n) { return parseInt(n); });
function longest(a, b) {
    if (a.length >= b.length) {
        return a;
    }
    else {
        return b;
    }
}
function fn(x) {
    console.log(x === null || x === void 0 ? void 0 : x.length);
}
// Expected 1 arguments, but got 0.
// fn()
// function len(s: string): number;
// function len(arr: any[]): number;
function len(x) {
    return x.length;
}
len(""); // OK
len([0]); // OK
len(Math.random() > 0.5 ? "hello" : [0]);
var user = {
    id: 123,
    admin: false,
    becomeAdmin: function () {
        this.admin = true;
    },
};
function multiply(n) {
    var m = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        m[_i - 1] = arguments[_i];
    }
    return m.map(function (x) { return n * x; });
}
// 'a' gets value [10, 20, 30, 40]
var a = multiply(10, 1, 2, 3, 4);
function sum(_a) {
    var a = _a.a, b = _a.b, c = _a.c;
    console.log(a + b + c);
}
