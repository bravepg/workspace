var express = require('express'),
	app = express();

app.use(express.static("./", {
	maxAge: 20000
}));

app.listen(4000);