/*
* @Author: gaopeng
* @Email:  gaopeng_hdu@163.com
* @Date:   2017-11-28 22:30:12
* @Last Modified by:   gaopeng
* @Last Modified time: 2017-11-28 22:34:50
*/

'use strict';

var fetch = require('node-fetch');

function* gen() {
	var url = 'https://api.github.com/users/github';
	var result = yield fetch(url);
	console.log(result.bio);
}

var g = gen();
var result = g.next();
console.log(result)
result.value.then(function (data) {
	return data.json();
}).then(function (data) {
	g.next(data);
});