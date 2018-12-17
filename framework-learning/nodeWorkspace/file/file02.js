/*
* @Author: viruser
* @Date:   2016-12-27 09:37:03
* @Last Modified by:   viruser
* @Last Modified time: 2016-12-27 09:46:35
*/

'use strict';
var fs = require('fs');
var buf = new Buffer(1024);

console.log("准备打开文件！");

fs.open('../input.txt', 'r+', function(err, fd) {
    if(err) {
        return console.error(err);
    }

    console.log("文件打开成功！");
    //截取文件
    fs.ftruncate(fd, 12, function(err) {
        if(err) {
            console.error(err);
        }
        console.log("文件截取成功！");
        console.log("读取相同的文件");
        fs.read(fd, buf, 0, buf.length, 0, function(err, bytes) {
            if(err) {
                console.error(err);
            }
            //仅输出读取的字节
            if(bytes > 0) {
                console.log(buf.slice(0, bytes).toString());
            }

            fs.close(fd, function(err) {
                if(err) {
                    console.error(err);
                }
                console.log("文件关闭成功");
            });
        });
    });
});
