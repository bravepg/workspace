const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                // 用于打包 css
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                // 打包图片等文件
                // 可以 import 方式或者 url() 形式
                use: [
                    'file-loader'
                ]
            }
        ]
    }
};