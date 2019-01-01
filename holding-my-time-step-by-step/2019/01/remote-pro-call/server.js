const net = require('net');

const server = net.createServer(socket => {
  socket.write('你好');
}).listen(9099);
console.log('server 开启');
server.on('close', () => {
  console.log('server 关闭');
});