/*
* @Author: gaopeng
* @Email:  gaopeng_hdu@163.com
* @Date:   2018-08-14 16:16:17
* @Last Modified by:   gaopeng
* @Last Modified time: 2018-08-14 16:20:45
*/

'use strict';

/**
* webpack 是用来构建打包使用的
* 但是每次修改文件都需要重新打包
* 这种打包速度是非常慢的
* 通过 webpack-dev-middleware 插件
* 可以使打包过程发生在内存中，加快开发环境的打包速度
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

app.get("/", function(req, res) {
    res.render("index");
});

app.listen(3333);