var http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url)
    res.end("ok({data: '1'})");
}).listen(80);