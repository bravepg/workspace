const net = require('net');

const client = net.connect({ port: 9099 }, () => {
  // socket.write('你好');
});
client.on('data', (data) => {
  console.log(data.toString());
})