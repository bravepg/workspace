/*
* @Author: gaopeng
* @Email:  gaopeng_hdu@163.com
* @Date:   2018-07-26 13:41:46
* @Last Modified by:   gaopeng
* @Last Modified time: 2018-07-26 13:42:30
*/

'use strict';
const Koa = require('koa');
const path = require('path');
const cors = require('koa-cors');
const app = new Koa();

app.use(cors());
app.use(require('koa-static')(path.resolve(__dirname, './public')));

app.listen(8081, () => {
  	console.log('koa app listening at 8081')
});