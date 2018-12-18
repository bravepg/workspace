var express = require('express');
var app = express();
var router = express.Router();
// 应用级中间件 ，绑定到 app 对象上
// 没有挂载路径的中间件，应用的每个请求都会执行该中间件
app.use(function (req, res, next) {
  	console.log('Time:', Date.now());
  	next();
});
// 挂载至 /user/:id 的中间件，任何指向 /user/:id 的请求(包括 GET 、POST等)都会执行它
// app.use('/user/:id', function (req, res, next) {
//   	console.log('Request Type:', req.method);
//   	next();
// });
// 在一个挂载点装载一组中间件
app.use('/user/:id', function(req, res, next) {
  	console.log('Request URL:', req.originalUrl);
  	next();
}, function (req, res, next) {
  	console.log('Request Type:', req.method);
  	// 屏蔽下一个中间件，至下一个路由  注意： next('route') 只对使用 app.VERB() 或 router.VERB() 加载的中间件有效。
  	next('route');
}, function (req, res, next) {
  	// 如果在此处调用，则会不会执行最后一个方法，可以使用next('route')
  	res.send('屏蔽下一个路由');
});
// 最后会执行
app.get('/user/:id', function (req, res, next) {
  	res.send('USER');
});



// 路由级中间件，绑定到express.Router对象上
// 没有挂载路径的中间件，通过该路由的每个请求都会执行该中间件
router.use(function (req, res, next) {
  	console.log('Time:', Date.now());
  	next();
});
// 一个中间件栈，显示任何指向 /user/:id 的 HTTP 请求的信息
router.use('/user/:id', function(req, res, next) {
  	console.log('Request URL:', req.originalUrl);
  	next();
}, function (req, res, next) {
  	console.log('Request Type:', req.method);
  	next();
});
// 将路由挂载至应用
app.use('/', router);

// 错误处理中间件中有4个参数(必须使用这 4 个参数)
app.use(function(err, req, res, next) {
  	console.error(err.stack);
  	res.status(500).send('Something broke!');
});


// 内置中间件 express.static
// 第三方中间件 cookie-parser
var server = app.listen(3000, function () {
  	var host = server.address().address;
  	var port = server.address().port;
  	console.log('Example app listening at http://%s:%s', host, port);
});