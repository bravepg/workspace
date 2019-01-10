var express = require('express');
var greet = express.Router();
var app = express();

app.get('/', function(req, res, next) {
	// res.append('Set-Cookie', 'foo=bar; Path=/; HttpOnly');
	// res.append('Warning', '199 Miscellaneous warning');
	// res.location('https://www.baidu.com');
	// res.send('Hello');
	// 一旦调用此方法，append 函数全部失效
	// res.set('Content-Type', 'text/plain');   // 与 res.header() 相同
	// res.sendStatus(200); // equivalent to res.status(200).send('OK')

	
	req.headers['accept'] = 'application/json';  // 设置请求头 accept 字段，在浏览器中观察不到，只能在终端看到
	req.headers['content-type'] = 'application/json';
	// accepts 方法并不是设置请求头，只是作为判断是否接受而已，需要自己处理
	// if (!req.accepts('html')) {
	// 	res.status(406).send('Not Acceptable');
	// }

	// 如果是 get 请求，只是普通的值
	console.log("req.get('content-type')", req.get('content-type'))

	res.type('html');  
	res.format({
		'text/plain': function() {
			res.send('hey');
		},
	
		'text/html': function() {
			res.send('<p>hey</p>');
		},
	
		'application/json': function() {
			// Content-Type 在callback 被选中执行的时候会被设置好, 如果你想改变它，可以在callback内使用res.set()或者 res.type()
			res.set('Content-Type', 'text/plain');
			res.send({ message: 'hey' });
		},
	
		'default': function() {
			// log the request and respond with 406
			res.status(406).send('Not Acceptable');
		}
	});
});

var server = app.listen(3000, function () {
  	var host = server.address().address;
  	var port = server.address().port;
  	console.log('Example app listening at http://%s:%s', host, port);
});