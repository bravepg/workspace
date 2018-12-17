const path = require('path');

/**
 * join 表示拼接字符串
 * .. 表示上一层目录
 * . 表示当前目录
 */
console.log(path.join('/foo', 'bar', 'baz/asdf', 'quux', '..'))


/**
 * resolve 把一个路径或路径片段的序列解析为一个绝对路径。
 * 
 * 注意解析顺序是从右往左执行的，直至返回一个绝对路径
 * 
 * 如果没有，当前工作目录路径会被用上作为绝对路径
 */
console.log(path.resolve('/foo/bar', 'bar', './baz'));  // /foo/bar/bar/baz
console.log(path.resolve('/foo/bar', '/bar', './baz')); // /bar/baz
console.log(path.resolve('foo/bar', './baz'));  
// node demo01.js
// /Users/gaopeng/MyWorkSpace/PersonalSpace/framework-learning/nodeWorkspace/chapter18-path/foo/bar/baz

console.log(path.resolve('foo/bar', './baz'));  
// node chapter18-path/demo01.js
// /Users/gaopeng/MyWorkSpace/PersonalSpace/framework-learning/nodeWorkspace/foo/bar/baz

console.log('path.dirname(__filename)', path.dirname(__filename));
console.log('__filename', __filename);
console.log('__dirname', __dirname);