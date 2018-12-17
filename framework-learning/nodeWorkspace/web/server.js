/*
* @Author: viruser
* @Date:   2016-12-27 12:25:38
* @Last Modified by:   viruser
* @Last Modified time: 2016-12-27 12:33:51
*/

'use strict';
var http = require('http');
var fs = require('fs');
var url = require('url');

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