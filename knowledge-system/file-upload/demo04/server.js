var http = require('http'),
    url  = require('url'),
    path = require('path'),
    fs   = require('fs');

var port = process.argv[2] || 80;

// 模仿解析http数据
function formidable(req, res) {
    var expect = 'sp';
    var sp, cont, type, total = 0;
    req.on('data', function(tr) {
        while (1) {
            switch (sp) {
                case 'sp':
                    var idx = tr.indexOf('\r\n');
                    if (idx === -1) return;
                    sp = tr.slice(0, idx).toString();
                    tr = tr.slice(idx + 2);
                    console.log('sp: ', sp);
                    expect = 'content';
                    break;
                
                case 'content':
                    var idx = tr.indexOf('\r\n');
                    cont = tr.slice(0, idx).toString();
                    console.log('cont', cont);
                    if (/Content-Disposition: ?form-data;.*filename="/.test(cont)) {
                        expect = 'type';
                        tr = tr.slice(idx + 2);
                    } else {
                        expect = 'value';
                        tr = tr.slice(idx + 4);
                    }
                    break;

                case 'value':
                    var idx = tr.indexOf('\r\n');
                    value = tr.slice(0, idx).toString();
                    tr = tr.slice(idx + 2);
                    console.log('value: ', value);
                    expect = 'sp';

                case 'type':
                    var idx = tr.indexOf('\r\n');
                    type = tr.slice(0, idx).toString();
                    tr = tr.slice(idx + 4);
                    console.log('type: ', type);
                    expect = 'end';
                    break;

                case 'end':
                    var idx = tr.indexOf('\r\n' + sp);
                    process.stdout.write('.');
                    if (idx >=0 ) {
                        total += idx;
                    } else {
                        total += tr.length;
                    }
                    return;
            }
        }
    }).on('end', function() {
        console.log('\ntotal: ', total);
        res.end(`<head>
            <meta http-equiv="Content-Type" content="text/html"; charset="utf8" />
            <body><p>${cont}</p>
            <p>total: ${total}</p>
            </body>
            </head>`);
    });
}

var mimeTypes = {
    "htm" : "text/html",
    "html": "text/html",
    "jpeg": "image/jpeg",
    "jpg" : "image/jpeg",
    "png" : "image/png",
    "gif" : "image/gif",
    "js"  : "text/javascript",
    "css" : "text/css"
};

var virtualDirectories = {};

process.chdir(__dirname);

http.createServer(function(request, response) {
    if (request.url === '/upload' && request.method.toLowerCase() === 'post') {
        console.log('post: ', request.url);
        formidable(request, response);
        return;
    }

    var uri = url.parse(request.url).pathname,
        filename = path.join(process.cwd(), uri),
        root = uri.split("/")[1],
        virtualDirectory;
    
    console.log('request_url: ', request.url);
    console.log('request_url_pathname: ', uri);
    console.log('process_cwd: ', process.cwd());

    virtualDirectory = virtualDirectories[root];
    if (virtualDirectory) {
        uri = uri.slice(root.length + 1, uri.length);
        filename = path.join(virtualDirectory, uri);
    }

    fs.exists(filename, function(exists) {
        if (!exists) {
            response.writeHead(404, {"Content-Type": "text/plain"});
            response.write("404 Not Found\n");
            response.end();
            console.error('404: ' + filename);
            return;
        }

        if (fs.statSync(filename).isDirectory()) filename += 'index.html';
        fs.readFile(filename, "binary", function(err, file) {
            if (err) {
                response.writeHead(500, {"Content-Type": "text/plain"});
                response.write(err + '\n');
                response.end();
                console.error('500: ', filename);
                return;
            }

            var mimeType = mimeTypes[path.extname(filename).split(".")[1]];
            response.writeHead(200, {"Content-Type": mimeType});
            response.write(file, "binary");
            response.end();
            console.log('200: ' + file.filename + 'as' + mimeType);
        });
    });
}).listen(parseInt(port, 10));

console.log("Static file server running at\n  => http://localhost:" + port + "/\nCTRL + C to shutdown");
