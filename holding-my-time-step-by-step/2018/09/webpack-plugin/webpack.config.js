const path = require('path');
const MyPlugin = require('./myPlugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [new MyPlugin({
        filename: 'analyze.html'
    })]
};