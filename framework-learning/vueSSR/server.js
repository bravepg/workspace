/*
* @Author: gaopeng
* @Email:  gaopeng_hdu@163.com
* @Date:   2018-08-08 10:56:14
* @Last Modified by:   gaopeng
* @Last Modified time: 2018-08-08 12:22:04
*/

'use strict';

// 第一步 创建一个 Vue 实例
const Vue = require('vue');
const server = require('express')();
// 第二步 创建一个 renderer
const renderer = require('vue-server-renderer').createRenderer({
	template: require('fs').readFileSync('./index.template.html', 'utf-8')
});

const createApp = require('./app')

server.get('*', (req, res) => {

	// 渲染上下文对象，作为 renderToString 函数的第二个参数
	const context = {
  		title: 'hello',
  		meta: `
  			<meta>
  		`
	};

	const app = createApp({ url: req.url });

	// 第三步 将 Vue 实例渲染为 HTML

	renderer.renderToString(app, context, (err, html) => {
	  	if (err) {
	  		console.log(err)
      		res.status(500).end('Internal Server Error');
      		return;
    	}
	  	res.end(html);
	});
});

server.listen(5000);

// 在 2.5.0+，如果没有传入回调函数，则会返回 Promise：
// renderer.renderToString(app).then(html => {
//   	console.log(html)
// }).catch(err => {
//   	console.error(err)
// })