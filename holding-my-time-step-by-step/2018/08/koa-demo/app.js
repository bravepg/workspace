/*
* @Author: gaopeng
* @Email:  gaopeng_hdu@163.com
* @Date:   2018-08-02 15:54:23
* @Last Modified by:   gaopeng
* @Last Modified time: 2018-08-02 15:59:54
*/

'use strict';
const Koa = require('koa');
const app = new Koa();

// logger

app.use(async (ctx, next) => {
  	await next();
  	console.log(111)
  	const rt = ctx.response.get('X-Response-Time');
  	console.log(`${ctx.method} ${ctx.url} - ${rt}`);
});

// x-response-time

app.use(async (ctx, next) => {
  	const start = Date.now();
  	await next();
  	console.log(222)
  	const ms = Date.now() - start;
  	ctx.set('X-Response-Time', `${ms}ms`);
});

// response

app.use(async ctx => {
	console.log(333)
  	ctx.body = 'Hello World';
});


const server = app.listen(3000, () => {
	var host = server.address().address;
  	var port = server.address().port;
  	console.log('Example app listening at http://%s:%s', host, port);
});