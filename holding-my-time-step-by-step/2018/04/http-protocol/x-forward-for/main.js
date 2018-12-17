/*
* @Author: gaopeng
* @Email:  gaopeng_hdu@163.com
* @Date:   2018-04-25 10:59:40
* @Last Modified by:   gaopeng
* @Last Modified time: 2018-07-06 15:49:23
*/

'use strict';

var http = require('http');

http.createServer(function (req, res) {
	var url = req.protocol +"://" + req.host + req.originalUrl;
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('remoteAddress: ' + req.connection.remoteAddress + '\n');
    res.write('x-forwarded-for: ' + req.headers['x-forwarded-for'] + '\n');
    res.write('x-real-ip: ' + req.headers['x-real-ip'] + '\n');
    res.write('request-url: ' + req.originalUrl + '\n');
    res.end();
}).listen(9009, '0.0.0.0');
