/**
 * 1. 不打包 loadsh
 * 2. 设置库名为 webpack-numbers
 * 3. 暴漏出去的变量名为 webpackNumbers
 * 4. 可以在 NodeJS 环境下使用
 */

var path = require('path');
module.exports = {
    entry: path.resolve(__dirname, 'index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'webpack-numbers.js',
        auxiliaryComment: 'Test Comment',
        library: 'webpackNumbers',
        libraryTarget: 'umd'
    },
    // 上面的配置会把 lodash 模块也打包进去
    // 但是有的情况是 使用该库的开发者已经安装了 lodash
    // 所以打包进去是多余的
    // 因此我们需要外部化 loadsh
    // 这个操作意味着 使用该库的开发者已经安装了 lodash
    // 我们就没有必要再次打包 lodash
    externals: {
        lodash: {
            commonjs: 'lodash',
            commonjs2: 'lodash',
            amd: 'lodash',
            root: '_'
        }
    },
    mode: 'development',  // 设置为开发环境, 方便观察注释之类的
}