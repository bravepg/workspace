const net = require('net');

// 存储所有客户端socket
let sockets = [];

const server = net.createServer((socket) => {
	console.log('Got a new connection');

	sockets.push(socket);
	socket.setEncoding('utf-8');
	socket.on('data', (data) => {
		console.log('Got data: ', data);
		sockets.forEach((otherSocket) => {
			if (otherSocket !== socket) otherSocket.write(data);
		});
	});

	socket.on('close', function() {
        console.log('A client connection closed');
        let index = sockets.indexOf(socket);
        sockets.splice(index, 1);
    });
});


server.on('error', function(err) {
    console.log('Server error: ', err.message);
});

server.on('close', function() {
    console.log('Server closed');
});

server.listen(3000);