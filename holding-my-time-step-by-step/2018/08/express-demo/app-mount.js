var express = require('express');
var app = express();
var admin = express();


admin.get('/', function (req, res) {
	console.log(admin.mountpath); // /admin
  	res.send('Admin Homepage');
});

app.use('/admin', admin);

var server = app.listen(3000, function () {
  	var host = server.address().address;
  	var port = server.address().port;
  	console.log('mountpath', app.mountpath);
  	console.log('Example app listening at http://%s:%s', host, port);
});