/*
* @Author: viruser
* @Date:   2016-12-26 16:45:55
* @Last Modified by:   viruser
* @Last Modified time: 2016-12-26 16:50:53
*/

'use strict';
var fs = require('fs');
//异步读取
fs.readFile('../input.txt', function (err, data) {
    if(err) {
        return console.error(err);
    }
    console.log("异步获取：" + data.toString());
});

//同步获取
var data = fs.readFileSync('../input.txt');
console.log("同步读取：" + data.toString());

console.log("程序执行完毕");