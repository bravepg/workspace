/*
* @Author: gaopeng
* @Email:  gaopeng_hdu@163.com
* @Date:   2018-05-23 20:04:58
* @Last Modified by:   gaopeng
* @Last Modified time: 2018-05-23 20:13:41
*/

'use strict';

// register.js 引入 babel-register，并配置。然后引入要执行代码的入口文件
require('babel-register')({ presets: ['react'] });
require('./test');