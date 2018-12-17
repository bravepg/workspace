/*
* @Author: viruser
* @Date:   2016-12-27 14:09:33
* @Last Modified by:   viruser
* @Last Modified time: 2016-12-27 14:15:30
*/

'use strict';
var express = require('express');
var app = express();

app.get('/', function(req, res) {
   res.send('Hello World'); 
});

var server = app.listen(8888, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log("应用实例，访问地址为 http://%s:%s", host, port);
});