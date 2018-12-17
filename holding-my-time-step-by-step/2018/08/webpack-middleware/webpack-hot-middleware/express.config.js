/*
* @Author: gaopeng
* @Email:  gaopeng_hdu@163.com
* @Date:   2018-08-14 16:16:17
* @Last Modified by:   gaopeng
* @Last Modified time: 2018-08-14 16:49:49
*/

'use strict';

/**
* 在上一个文件中，可以实现文件修改后自动打包
* 但是浏览器却不能够自动刷新
* 通过 webpack-hot-middleware 插件
* 可以实现浏览器的自动刷新
* 但是 需要对 webapck 和配置进行部分改造
*/
const path = require('path');
const express = require('express');
const ejs = require('ejs');

const app = express();
const webpack = require('webpack');
const webpackMiddleware = require("webpack-dev-middleware");
const webpackConf = require('./webpack.config.js');

app.engine('html', ejs.renderFile);
app.set('views', path.join(__dirname, 'src/html'));
app.set("view engine", "html");

var compiler = webpack(webpackConf);

app.use(webpackMiddleware(compiler, {
	publicPath: webpackConf.output.publicPath
}));

// 添加的代码段，引入和使用 webpack-hot-middleware (改造1)
app.use(require("webpack-hot-middleware")(compiler, {
    path: '/__webpack_hmr'
}));

app.get("/", function(req, res) {
    res.render("index");
});

app.listen(3333);