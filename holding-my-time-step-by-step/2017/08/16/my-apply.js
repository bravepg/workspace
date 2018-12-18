// 第一版
Function.prototype.applyOne = function (context) {
    context.fn = this;   // 首先获取调用applyOne的函数，用this可以获取
    context.fn();
    delete context.fn;
};

var jawil = {
    name: 'jawil',
    sayHello: function (age) {
        console.log(this.name);
    }
};

var lulin = {
    name: 'lulin'
};

jawil.sayHello.applyOne(lulin);    // lulin

// 第二版
Function.prototype.applyTwo = function (context) {
    context.fn = this;
    var args = arguments[1];
    // es6的实现方式
    // context.fn(...args);
    // es的实现方式
    var fnStr = 'context.fn(';
    for (var i = 0; i < args.length; i++) {
        fnStr += i == args.length - 1 ? args[i] : args[i] + ',';
    }
    fnStr += ')'; // 得到"context.fn(arg1,arg2,arg3...)"这个字符串在，最后用eval执行
    eval(fnStr);
    delete context.fn;
}

var jawil = {
    name: 'jawil',
    sayHello: function (age) {
        console.log(this.name, age);
    }
};

var lulin = {
    name: 'lulin'
};
jawil.sayHello.applyTwo(lulin, [24]);    // lulin


// 第三版
Function.prototype.applyThree = function (context) {
    var context = context || window;
    var args = arguments[1];
    context.fn = this;
    if (args == void 0) {
        return context.fn();
    }
    var fnStr = 'context.fn(';
    for (var i = 0; i < args.length; i++) {
        fnStr += i == args.length - 1 ? args[i] : args[i] + ',';
    }
    fnStr += ')';
    var returnValue = eval(fnStr) // 还是eval强大
    delete context.fn // 执行完毕之后删除这个属性
    return returnValue
};

var obj = {
    name: 'jawil'
}

function sayHello(age) {
    return {
        name: this.name,
        age: age
    }
}

console.log(sayHello.applyThree(obj,[24]));// 完美输出{name: "jawil", age: 24}

// 第四版 利用Symbol保证fn唯一性
Function.prototype.applyThree = function (context) {
    var context = context || window;
    var args = arguments[1];
    var fn = Symbol();
    context[fn] = this;
    if (args == void 0) {
        return context[fn]();
    }
    var fnStr = 'context[fn](';
    for (var i = 0; i < args.length; i++) {
        fnStr += i == args.length - 1 ? args[i] : args[i] + ',';
    }
    fnStr += ')';
    var returnValue = eval(fnStr) // 还是eval强大
    delete context[fn] // 执行完毕之后删除这个属性
    return returnValue
};

var obj = {
    name: 'jawil'
}

function sayHello(age) {
    return {
        name: this.name,
        age: age
    }
}

console.log(sayHello.applyThree(obj,[24]));// 完美输出{name: "jawil", age: 24}

// 第五版 模拟Symbol
function jawilSymbol(obj) {
    var unique_proper = "00" + Math.random();
    if (obj.hasOwnProperty(unique_proper)) {
        arguments.callee(obj) //如果obj已经有了这个属性，递归调用，直到没有这个属性
    } else {
        return unique_proper;
    }
}

Function.prototype.applyFive = function(context) {
    var context = context || window
    var args = arguments[1] //获取传入的数组参数
    var fn = jawilSymbol(context);
    context[fn] = this //假想context对象预先不存在名为fn的属性
    if (args == void 0) { //没有传入参数直接执行
        return context[fn]()
    }
    console.log(args.length);
    var fnStr = 'context[fn]('
    for (var i = 0; i < args.length; i++) {
        console.log(args); // 
        console.log(args.length);
        //得到"context.fn(arg1,arg2,arg3...)"这个字符串在，最后用eval执行
        fnStr += i == args.length - 1 ? args[i] : args[i] + ','
    }
    fnStr += ')'
    var returnValue = eval(fnStr) //还是eval强大
    delete context[fn] //执行完毕之后删除这个属性
    return returnValue
}

function sayHello(age) {
    return {
        name: this.name,
        age: age
    }
}

// console.log(sayHello.applyFive(obj,[24]));// 完美输出{name: "jawil", age: 24}

Function.prototype.callOne = function(context) {
    console.log('arguments', arguments)
    return this.applyFive(([].shift.applyFive(arguments)), arguments)
    //巧妙地运用上面已经实现的applyFive函数
}

//测试一下
var obj = {
    name: 'jawil'
}

function sayHello(age) {
    return {
        name: this.name,
        age: age
    }
}

console.log(sayHello.callOne(obj,24));// 完美输出{name: "jawil", age: 24}





var jawil2 = {
    name: 'jawil',
    sayHello: function (age) {
        console.log('six---',this.name, age);
    }
};

var lulin2 = {
    name: 'lulin'
};
jawil2.sayHello.applySix = function (context) {
    var context = context || window;
    var args = arguments[1];
    context.fn = this;
    if (args === void 0) {
        return context.fn();
    }
    var fnStr = 'context.fn(';
    for (var i = 0; i < args.length; i++) {
        fnStr += i + 1 === args.length ? args[i] : args[i] + ',';
    }
    fnStr += ')';
    eval(fnStr);
    delete context.fn;
}
jawil2.sayHello.applySix(lulin2, [24]);    // lulin