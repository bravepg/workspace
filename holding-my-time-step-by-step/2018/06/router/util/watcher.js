/*
* @Author: gaopeng
* @Email:  gaopeng_hdu@163.com
* @Date:   2018-06-30 09:39:13
* @Last Modified by:   gaopeng
* @Last Modified time: 2018-06-30 12:38:51
*/

'use strict';

// 观察视图
import { setTarget, cleanTarget } from './dep';

export class Watcher {
	constructor(vm, expression, callback) {
		this.vm = vm;
		this.callbacks = [];
		this.expression = expression;
		this.callbacks.push(callback);
		this.value = this.getVal();
	}

	getVal() {
		setTarget(this);
		let val = this.vm;
		this.expression.split('.').forEach((key) => {
			val = val[key];
		});
		cleanTarget();
    	return val;
	}

	update() {
		this.callbacks.forEach((cb) => cb());
	}
}