var express = require('express');

var router = express.Router();

router.get('/', function(req, res) {
    res.send('GET handler for /dogs route.');
});

router.post('/', function(req, res) {
    res.send('POST handler for /dogs route.');
});

module.exports = router;