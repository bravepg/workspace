var http = require('http');

http.createServer(function (req, res) {
	var url = req.protocol +"://" + req.host + req.originalUrl;
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('remoteAddress: ' + req.connection.remoteAddress + '\n');
    res.write('x-forwarded-for: ' + req.headers['x-forwarded-for'] + '\n');
    res.write('x-real-ip: ' + req.headers['x-real-ip'] + '\n');
    res.write('request-url: ' + req.originalUrl + '\n');
    res.end();
}).listen(9009, '0.0.0.0');
