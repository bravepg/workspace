/*
* @Author: gaopeng
* @Email:  gaopeng_hdu@163.com
* @Date:   2018-03-26 15:47:56
* @Last Modified by:   gaopeng
* @Last Modified time: 2018-03-26 15:54:29
*/

'use strict';

const queuedObservers = new Set();

const observe = fn => queuedObservers.add(fn);

const observable = obj => new Proxy(obj, { set });

function set(target, key, value, receiver) {
	const result = Reflect.set(target, key, value, receiver);

	queuedObservers.forEach(observer => observer());
  	return result;
}

const person = observable({
	name: '张三',
	age: 20
});

function print() {
  console.log(`${person.name}, ${person.age}`)
}

observe(print);
person.name = '李四';