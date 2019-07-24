## 代码拆分的方式

### ``Entry Points`` 手动配置多个入点
```
entry: {
    index: './index.js',
    another: './another-module.js'
},
```
缺点

1. 如果两个 ``entry chunks`` 有重复的模块，打包出来的 ``bundles``都会有该模块

2. 不够灵活，不能动态分割应用程序

### 使用 ``SplitChunksPlugin`` 去除重复的块

### ``import()`` 动态导入