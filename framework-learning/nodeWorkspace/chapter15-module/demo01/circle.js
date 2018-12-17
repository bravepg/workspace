/**
 * 通过在 exports 对象上添加属性，函数和对象可以被添加到模块的根部
 * 模块内的本地变量是私有的，因为模块被包装在一个函数中 (模块包装器)
 * (function(exports, require, module, __filename, __dirname) {
 *     // 模块的代码实际上在这里
 * });
 * 这也就解释了为什么可以在模块中使用 exports、require、__dirname、__filename 等内置变量
 */

const { PI } = Math;

exports.area = (r) => PI * r ** 2;

exports.circumference = (r) => 2 * PI * r;