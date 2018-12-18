var express = require('express'),
	bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));

app.all('*', function(req, res, next) { 
	// 如果想让cookie发送至前端，必须设置为localhost:4000，而不是*
	res.header("Access-Control-Allow-Origin", req.headers.origin);
	res.header("Access-Control-Max-Age", 60);
	res.header("Access-Control-Allow-Credentials", true);
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.header("Access-Control-Allow-Methods","PUT, POST, GET, DELETE, OPTIONS"); 
	res.header("Content-Type", "application/json;charset=utf-8");
	next(); 
});

app.post('/post_form', function (req, res) { 
	res.cookie('gao1', 'peng1')
	res.send(req.body); 
});

app.post('/post_form2', function (req, res) {
	res.cookie('gao2', 'peng2')
	res.send(req.body); 
});

app.post('/post_form3', function (req, res) { 
	res.cookie('gao3', 'peng3')
	res.send(req.body); 
});


app.listen(3000);