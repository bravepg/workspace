/**
 * pointfree 是指永远不必说出你的数据
 */

// 非 pointfree 模式
// 由于提到了数据 name
var intials = function(name) {
  return name.split(' ').map(compose(toUpperCase, head)).join('. ');
}

// pointfree 模式
var initials = compose(join('. '), map(compose(toUpperCase, head)), split(' '));


// 函数式编程比较复杂的一个问题就是调试，那么如何进行调试呢？可以使用 debug 函数
var trace = curry(function(tag, x) {
  console.log(tag, x);
  return x;
});