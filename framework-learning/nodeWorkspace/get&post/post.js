/*
* @Author: viruser
* @Date:   2016-12-27 09:55:43
* @Last Modified by:   viruser
* @Last Modified time: 2016-12-27 09:58:31
*/

'use strict';
var http = require('http');
var queryString = require('querystring');
var util = require('util');

http.createServer(function(req, res) {
    var post = '';
    req.on('data', function(chunk) {
        post += chunk;
    });
    req.on('end', function() {
        post = queryString.parse(post);
        res.end(util.inspect(post));
    });
}).listen(8888);