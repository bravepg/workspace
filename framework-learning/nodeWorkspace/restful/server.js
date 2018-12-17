/*
* @Author: viruser
* @Date:   2016-12-27 15:58:12
* @Last Modified by:   viruser
* @Last Modified time: 2016-12-27 16:21:56
*/

'use strict';
var express = require('express');
var app = express();
var fs = require('fs');

//显示所有用户信息
app.get('/listUsers', function(req, res) {
    fs.readFile(__dirname + "/" + "users.json", 'utf-8', function(err, data) {
        console.log(data);
        res.end(data);
    });
});

//增加用户
var user = {
   "user4" : {
      "name" : "mohit",
      "password" : "password4",
      "profession" : "teacher",
      "id": 4
   }
}
app.get('/addUser', function(req, res) {
    //读取已经存在的数据
    fs.readFile(__dirname + '/users.json', 'utf-8', function(err, data) {
        data = JSON.parse(data);
        data['user4'] = user;
        console.log(data);
        res.end(JSON.stringify(data));
    });
});

//显示用户详细信息
app.get('/:id', function(req, res) {
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
        data = JSON.parse( data );
        var user = data["user" + req.params.id]; 
        console.log(req.params.id);
        res.end(JSON.stringify(user));
   });
});

//删除用户
app.get('/deleteUser/:id', function(req, res) {
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
        data = JSON.parse(data);
        delete data["user" + req.params.id];
        res.end( JSON.stringify(data));
   });
});

var server = app.listen(8888, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log("应用实例，访问地址为 http://%s:%s", host, port);
});