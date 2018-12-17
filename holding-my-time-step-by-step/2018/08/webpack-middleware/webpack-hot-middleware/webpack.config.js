/*
* @Author: gaopeng
* @Email:  gaopeng_hdu@163.com
* @Date:   2018-08-14 16:14:09
* @Last Modified by:   gaopeng
* @Last Modified time: 2018-08-14 16:51:37
*/

'use strict';

const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: ['webpack-hot-middleware/client', './app.js'],  // 改造2
	output: {
		publicPath: "/assets/",
		filename: 'bundle.js'
	},
	plugins: [  // 改造3
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()   //出错时只打印错误，但不重新加载页面
    ]
}