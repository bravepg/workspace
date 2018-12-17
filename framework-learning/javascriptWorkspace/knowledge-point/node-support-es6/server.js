/*
* @Author: gaopeng
* @Email:  gaopeng_hdu@163.com
* @Date:   2018-04-18 11:15:12
* @Last Modified by:   gaopeng
* @Last Modified time: 2018-04-18 11:15:27
*/

'use strict';

var http = require('http');
var fs = require('fs');
var url = require('url');
console.log('this', this)

http.createServer(function(req, res) {
    //解析请求，包括文件名
    var pathname = url.parse(req.url).pathname;
    //输出请求的文件名
    console.log("Request for " + pathname + " received.");

    //从文件系统中读取请求的文件内容
    fs.readFile(pathname.substr(1), function(err, data) {
        if(err) {
            console.error(err);
            res.writeHead(404, {'Content-Type': 'text/html'});
        } else {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data.toString());
        }
        res.end();
    });
}).listen(8888);

console.log('Server running at http://127.0.0.1:8888/');