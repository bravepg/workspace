/*
* @Author: gaopeng
* @Email:  gaopeng_hdu@163.com
* @Date:   2018-08-08 12:19:07
* @Last Modified by:   gaopeng
* @Last Modified time: 2018-08-08 12:53:46
*/

'use strict';

import Vue from 'vue';
import App from './App.vue';
import { createRouter } from './router';
import { createStore } from './store';
import { sync } from 'vuex-router-sync';

// 导出一个工厂函数，用于创建新的
// 应用程序、router 和 store 实例
export function createApp () {
	// 创建 router 和 store 实例
	const router = createRouter();
	const store = createStore();

	// 同步路由状态(route state)到 store
	sync(store, router);

  	const app = new Vue({
  		// 注入 router 到根 Vue 实例
		router,
		store,
    	// 根实例简单的渲染应用程序组件。
    	render: h => h(App)
  	});
  	// 返回 app 和 router
  	return { app, router, store };
}