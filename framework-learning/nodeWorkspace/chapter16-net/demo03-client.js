const net = require('net');
const client = net.connect({port: 3000});

client.on('connect', () => {
  	client.write('data from client');
});

client.on('data', (chunk) => {
	console.log(chunk.toString());
	client.end();
});