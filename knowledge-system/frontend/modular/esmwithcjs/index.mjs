// import { foo } from './foo.js';
// ES6 模块的 import 命令可以加载 CommonJS 模块，但是只能整体加载，不能只加载单一的输出项。
// commonjs 的输出是对象，无法静态分析，只能整体加载
import foo from './foo.js';

console.log('foo', foo);
