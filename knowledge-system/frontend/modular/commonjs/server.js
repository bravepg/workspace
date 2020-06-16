const module1 = require('./module1');
const module2 = require('./module2');
// 删除所有模块的缓存
// Object.keys(require.cache).forEach(function(key) {
//   delete require.cache[key];
// })

// require 加载一次后结果就会被缓存
// 必须手动去删除缓存
const module3 = require('./module2');

module1.foo();
module2();
module3();
