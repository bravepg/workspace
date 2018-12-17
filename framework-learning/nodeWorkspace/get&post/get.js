/*
* @Author: viruser
* @Date:   2016-12-27 09:50:17
* @Last Modified by:   viruser
* @Last Modified time: 2016-12-27 09:53:17
*/

'use strict';
var http = require('http');
var url = require('url');
var util = require('util');
http.createServer(function(req, res) {
    res.writeHead(200, {"Content-Type": 'text/plain'});
    res.end(util.inspect(url.parse(req.url, true)));
}).listen(8888);