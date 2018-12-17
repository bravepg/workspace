/**
 * 缓存
 * 模块在第一次加载后会被缓存，多次调用会只执行一次
 */

console.log('a 开始');
exports.done = false;
const b = require('./b.js');
console.log('在 a 中，b.done = %j', b.done);
exports.done = true;
console.log('a 结束');