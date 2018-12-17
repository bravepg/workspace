/*
* @Author: viruser
* @Date:   2016-12-27 14:41:37
* @Last Modified by:   viruser
* @Last Modified time: 2016-12-27 14:58:01
*/

'use strict';
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({extended: false});

app.use(express.static('public'));

app.get('/index.html', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.post('/process_post', urlencodedParser, function(req, res) {
    var response = {
        first_name: req.body.first_name,
        last_name:  req.body.last_name
    }
    console.log(response);
    res.end(JSON.stringify(response));
});

var server = app.listen(8888, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log("应用实例，访问地址为 http://%s:%s", host, port);
});