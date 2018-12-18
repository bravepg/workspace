/**
* 通过 webpack-hot-middleware webpack-dev-middleware 插件
* 我们已经实现了热更新
* 但是如果是 webpack-dev-server，我们便不再需要上述两个插件和 express 服务
* 简单地说，webpack-dev-server 就是起了服务器并且综合 webpack-hot-middleware webpack-dev-middleware
*/
const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './app.js',
    output: {
        publicPath: "/assets/",
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, "src/html"),
        port: 3333,
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};