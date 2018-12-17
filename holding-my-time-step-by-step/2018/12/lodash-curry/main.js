var curry = require('lodash').curry;
var reduce = require('lodash').reduce;

var match = curry(function(what, str) {
  return str.match(what);
});

console.log(match(/\s+/g, "hello world"));  // [ ' ' ]

/**
 * 第一次输出
 * 上面的代码跟下面的一样，没看出有什么优势
 * var match = function(what, str) {
 *   return str.match(what);
 * };
 * 
 * 接下来
 */

var hasSpaces = match(/\s+/g);
// function(x) { return x.match(/\s+/g) }

hasSpaces("hello world");
// [ ' ' ]

// 思考上述代码，貌似是，这个 curry 既可以接受一个参数也可以接受多个参数啊

var fakeCurry = function (f) {
  var args = [];
  let sum = function () {
    args.push(...arguments);
    if (args.length === f.length) {
      return f.apply(null, args);
    } else {
      return sum;
    }
  }
  return sum;
};

let sum = fakeCurry(function(what, str) {
  return str.match(what);
});
console.log('sum', sum(/\S+/g, "hello world"));

var replace = fakeCurry(function(what, replacement, str) {
  return str.replace(what, replacement);
});

var noVowels = replace(/[aeiou]/ig);
// function(replacement, x) { return x.replace(/[aeiou]/ig, replacement) }

var censored = noVowels("*");
// function(x) { return x.replace(/[aeiou]/ig, "*") }

console.log(censored("Chocolate Rain"));

let sum1 = [1, 2, 3].reduce((x, y) => {
  return x + y;
}, 0);
console.log('sum1', sum1);

// let sum2 = reduce((x, y) => x + y, [1, 2, 3], 0);
// console.log('sum2', sum2);
// console.log(JSON.stringify(reduce))
// var reverse = reduce(function(acc, x){ return [x].concat(acc); }, []);
// console.log(reverse)