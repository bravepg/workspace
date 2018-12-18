// 回调函数中有三个参数
// 第一个参数表示newArr的每一项，第二个参数表示该项在数组中的索引值
// 第三个表示数组本身
// 除此之外，回调函数中的this，当map不存在第二参数时，this指向丢失，当存在第二个参数时，指向该参数所设定的对象
var newArr = [1, 2, 3, 4].map(function (item, i, arr) {
    console.log(item, i, arr, this);
    return item + 1;
}, { a: 1 })

console.log(newArr);

Array.prototype._map = function (fn, context) {
    var temp = [];
    if (typeof fn == 'function') {
        var k = 0;
        console.log('this', this)
        console.log('context', context)
        var len = this.length;
        for (; k < len; k++) {
            // 将每一项的运算操作丢进fn里， 利用call方法指定fn的this指向与具体参数
            temp.push(fn.call(context, this[k], k, this))
        }
    } else {
        console.error('TypeError: '+ fn +' is not a function.');
    }
    return temp;
};
var newArr = [1, 2, 3, 4]._map(function(item) {
    console.log('_map', this);
    return item + 1;
}, {a: 1})
console.log(newArr);

function add() {
    // 第一次执行时，定义一个数组专门用来存储所有的参数
    var _args = [].slice.call(arguments);
    console.log('_args', _args)
    
    // 在内部声明一个函数，利用闭包的特性保存_args并收集所有的参数值
    var adder = function () {
        console.log('argumentsadder',arguments);
        var _adder = function() {
            console.log('arguments',arguments);
            [].push.apply(_args, [].slice.call(arguments));
            return _adder;
        };

        // 利用隐式转换的特性，当最后执行时隐式转换，并计算最终的值返回
        _adder.toString = function () {
            return _args.reduce(function (a, b) {
                return a + b;
            });
        }

        return _adder;
    }
    return adder.apply(null, [].slice.call(arguments));
}

// 输出结果，可自由组合的参数
console.log(add(1, 2, 3, 4, 5).toString());  // 15
console.log(add(1, 2, 3)(4)(5).toString());  // 15


// 柯里化通用公式
var currying = function (fn) {
    var args = [].slice.call(arguments, 1);
    console.log('args', args);
    return function () {
        var _args = args.concat([].slice.call(arguments));
        return fn.apply(null, _args)
    }
}
var sum = currying(function () {
    var args = [].slice.call(arguments);
    return args.reduce(function (a, b) {
        return a + b;
    })
}, 10);

console.log(sum(20, 10));  // 40 要区分执行方法和定义方法
console.log(sum(10, 5));   // 25


// 柯里化与bind
Object.prototype.bind = function (context) {
    var _this = this;
    var args = [].slice.call(arguments, 1);
    return function() {
        return _this.apply(context, args)
    }
}

// 自己的思路
function add1() {
    var _args = [].slice.call(arguments);
    var adder = function () {
        [].push.apply(_args, [].slice.call(arguments));
        return adder;
    }
    adder.toString = function () {
        return _args.reduce(function (a, b) {
            return a + b;
        });
    }
    return adder;
}

console.log(add1(1, 2, 3)(4)(5)(6).toString());