var express = require('express'),
    dogs    = require('./routes/dogs'),
    cats    = require('./routes/cats'),
    birds   = require('./routes/birds');

var app = express();

app.use('/dogs',  dogs);
app.use('/cats',  cats);
app.use('/birds', birds);

app.listen(3000);