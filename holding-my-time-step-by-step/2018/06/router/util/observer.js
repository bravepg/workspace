/*
* @Author: gaopeng
* @Email:  gaopeng_hdu@163.com
* @Date:   2018-06-30 09:55:10
* @Last Modified by:   gaopeng
* @Last Modified time: 2018-06-30 13:39:45
*/

'use strict';

// 观察数据变化
import { Dep } from './dep';

class Observer {
	constructor(value) {
		this.walk(value);
	}

	walk(obj) {
		Object.keys(obj).forEach((key) => {
			// 如果是对象，则递归调用walk，保证每个属性都可以被defineReactive
			if (typeof obj[key] === 'object') {
				this.walk(obj[key]);
			}
			// console.log('obj', obj[key], obj)
			this.defineReactive(obj, key, obj[key]);
		});
	}

	defineReactive(obj, key, value) {
		let dep = new Dep();
		Object.defineProperty(obj, key, {
			get: () => {
				if (Dep.target) {
			        dep.add();
			    }
			    return value;
			},

			set: (newValue) => {
				value = newValue;
				dep.notify();
			}
		});
	}
}

export function observer(value) {
	return new Observer(value);
};