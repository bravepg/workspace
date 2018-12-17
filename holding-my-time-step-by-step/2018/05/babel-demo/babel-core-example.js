/*
* @Author: gaopeng
* @Email:  gaopeng_hdu@163.com
* @Date:   2018-05-23 17:17:28
* @Last Modified by:   gaopeng
* @Last Modified time: 2018-05-23 17:18:43
*/

'use strict';

var babel = require("babel-core");

var result = babel.transform("code();");

console.log(result.code);
console.log(result.map);
console.log(result.ast);