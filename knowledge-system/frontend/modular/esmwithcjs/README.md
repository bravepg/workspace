## ESM 与 CJS 的差异
* cjs 输出的是一个值的拷贝，esm 输出的是值的引用
* cjs 是运行时加载，esm 是编译时输出接口
* cjs 的 require 是同步加载，esm 模块的 import 是异步加载，准确来说，有一个模块的独立解析阶段