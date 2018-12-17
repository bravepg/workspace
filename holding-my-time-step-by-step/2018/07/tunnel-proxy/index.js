/*
* @Author: gaopeng
* @Email:  gaopeng_hdu@163.com
* @Date:   2018-07-28 22:27:45
* @Last Modified by:   gaopeng
* @Last Modified time: 2018-07-28 22:32:14
*/

'use strict';
var http = require('http');
var net = require('net');
var url = require('url');

function connect(cReq, cSock) {
    var u = url.parse('http://' + cReq.url);

    var pSock = net.connect(u.port, u.hostname, function() {
        cSock.write('HTTP/1.1 200 Connection Established\r\n\r\n');
        pSock.pipe(cSock);
    }).on('error', function(e) {
        cSock.end();
    });

    cSock.pipe(pSock);
}

http.createServer().on('connect', connect).listen(8888, '0.0.0.0');