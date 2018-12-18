const net = require('net');
// 注释的这种写法跟下面的一致
// const server = net.createServer((socket) => {
//   socket.pipe(process.stdout);
//   socket.write('data from server');
// });

const server = net.createServer();
server.on('connection', (socket) => {
	socket.pipe(process.stdout);
  	socket.write('data from server');
});

server.listen(3000, () => {
	console.log(`server is on ${JSON.stringify(server.address())}`);
});