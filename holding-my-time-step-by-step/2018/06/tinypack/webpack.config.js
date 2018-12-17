/*
* @Author: gaopeng
* @Email:  gaopeng_hdu@163.com
* @Date:   2018-06-11 10:32:55
* @Last Modified by:   gaopeng
* @Last Modified time: 2018-06-11 10:41:50
*/

'use strict';
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'development'
}