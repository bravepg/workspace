var express = require('express');
var router = express.Router();
var path = require('path');
var app = express();

// 路由句柄有多种形式，可以是一个函数、一个函数数组，或者是两者混合


// 使用多个回调函数处理路由（记得指定 next 对象）
// app.get('/', function (req, res, next) {
// 	console.log('response will be sent by the next function ...');
//   	next();
// }, function (req, res, next) {
// 	res.send('Hello from B!');
// });

// 使用回调函数数组处理路由（记得指定 next 对象）
var cb0 = function (req, res, next) {
  console.log('CB0');
  next();
}

var cb1 = function (req, res, next) {
  console.log('CB1');
  next();
}

var cb2 = function (req, res) {
	// 渲染模版，需要引入engine
  	// res.render('index.html');

  	// 以八位字节流发送数据
  	res.sendFile(path.join(__dirname, 'index.html'));
}
app.get('/', [cb0, cb1, cb2]);


//  创建路由路径的链式路由句柄
app.route('/book')
  	.get(function(req, res) {
    	res.send('Get a random book');
  	})
  	.post(function(req, res) {
    	res.send('Add a book');
  	})
  	.put(function(req, res) {
  	  	res.send('Update the book');
  	});

// 小型路由系统
// 该路由使用的中间件
router.use(function timeLog(req, res, next) {
  	console.log('Time: ', Date.now());
  	next();
});
// 定义网站主页的路由
router.get('/', function(req, res) {
  	res.send('Birds home page');
});
// 定义 about 页面的路由
router.get('/about', function(req, res) {
  	res.send('About birds');
});
app.use('/birds', router);

var server = app.listen(3000, function () {
  	var host = server.address().address;
  	var port = server.address().port;
  	console.log('Example app listening at http://%s:%s', host, port);
});