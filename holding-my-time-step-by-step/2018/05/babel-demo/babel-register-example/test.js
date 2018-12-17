/*
* @Author: gaopeng
* @Email:  gaopeng_hdu@163.com
* @Date:   2018-05-23 20:05:27
* @Last Modified by:   gaopeng
* @Last Modified time: 2018-05-23 20:05:39
*/

'use strict';

// test.js 这个文件是 jsx...
const React = require('react');
const elements = [1, 2, 3].map((item) => {
  return (
    <div>{item}</div>
  )
});
console.log(elements);