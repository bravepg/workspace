/*
* @Author: gaopeng
* @Email:  gaopeng_hdu@163.com
* @Date:   2018-06-30 09:33:36
* @Last Modified by:   gaopeng
* @Last Modified time: 2018-06-30 11:26:06
*/

'use strict';

// 事件通道
export class Dep {
	constructor() {
		this.deppend = [];
	}

	add() {
		this.deppend.push(Dep.target);
	}

	notify() {
		this.deppend.forEach((target) => {
			target.update();
		});
	}
}

Dep.target = null;

export function setTarget(target) {
	Dep.target = target;
}

export function cleanTarget() {
	Dep.target = null;
}