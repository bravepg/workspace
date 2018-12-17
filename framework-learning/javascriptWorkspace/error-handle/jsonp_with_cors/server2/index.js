/*
* @Author: gaopeng
* @Email:  gaopeng_hdu@163.com
* @Date:   2018-07-26 14:30:13
* @Last Modified by:   gaopeng
* @Last Modified time: 2018-07-26 14:35:49
*/

'use strict';
const Koa = require('koa');
const path = require('path');
const route = require('koa-route');
const cors = require('koa-cors');
const app = new Koa();

app.use(cors());
app.use(route.get('/data', (ctx) => {
  const callback = ctx.query.callback;
  ctx.response.body = `${callback}(data)`;
}))
app.listen(8081, () => {
  console.log('koa app listening at 8081')
});