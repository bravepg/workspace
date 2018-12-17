/*
* @Author: viruser
* @Date:   2016-12-27 09:19:47
* @Last Modified by:   viruser
* @Last Modified time: 2016-12-27 09:34:40
*/

'use strict';
var fs = require('fs');
var buf = new Buffer(1024);
//异步打开文件
console.log("准备打开文件！");
fs.open('../input.txt', 'r+', function(err, fd) {
    if(err) {
        return console.error(err);
    }
    console.log("文件打开成功！");
    console.log("准备读取文件：");
    fs.read(fd, buf, 0, buf.length, 0, function(err, bytes) {
        if(err) {
            return console.log(err);
        }
        console.log(bytes + " 字节被读取");

        //仅输出读取的字节
        if(bytes > 0) {
            console.log(buf.slice(0, bytes).toString())
        }

        // 关闭文件
        fs.close(fd, function(err){
            if(err) {
                console.log(err);
            } 
            console.log("文件关闭成功");
            });
        });
});

fs.stat('../input.txt', function(err, stats) {
    console.log(stats);
    console.log(stats.isFile());
});