/*
* @Author: gaopeng
* @Email:  gaopeng_hdu@163.com
* @Date:   2018-05-05 23:43:32
* @Last Modified by:   gaopeng
* @Last Modified time: 2018-05-06 11:08:21
*/

'use strict';

var fs = require('fs');
var express = require('express');
var formidable = require('formidable');

var app = express();

app.use('/static', express.static(__dirname + '/public', { 'Cache-Control': 'no-cache' }));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});


// 定义接口
app.post('/api/fileUpload', function (req, res) {
	var form = new formidable.IncomingForm();
	form.parse(req, function (error, fields, files) {
		fs.writeFileSync("public/test.png", fs.readFileSync(files.image.path));
	})
	res.json({})
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});