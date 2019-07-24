const path = require('path');

module.exports = {
    mode: 'development',
    context: path.resolve(__dirname, 'src'),
    entry: {
        index: './dynamic.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}