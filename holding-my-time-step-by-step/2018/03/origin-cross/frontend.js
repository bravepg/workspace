var express = require('express'),
	app = express();

app.use(express.static("./"))
app.get('/', function (req, res) {
	res.render(__dirname + '/index.html');
});

app.listen(4000);