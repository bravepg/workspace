/*
* @Author: viruser
* @Date:   2016-12-26 15:51:51
* @Last Modified by:   viruser
* @Last Modified time: 2016-12-26 16:01:31
*/

'use strict';
var http = require('http');
var url = require('url');

function start(route) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log("Request for" + pathname + " received.");

        route(pathname);

        response.writeHead(200, {"Content-Type": 'text/plain'});
        response.write("Hello World");
        response.end();
    }

    http.createServer(onRequest).listen(8888);
    console.log("Server has started");
}

exports.start = start;