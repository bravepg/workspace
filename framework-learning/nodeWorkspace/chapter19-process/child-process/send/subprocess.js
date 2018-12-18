// process.on('message', (m) => {
//   	console.log('子进程收到消息：', m);
// });

// // Causes the parent to print: PARENT got message: { foo: 'bar', baz: null }
// process.send({ foo: 'bar', baz: NaN });

process.on('message', (m, server) => {
  if (m === 'server') {
    server.on('connection', (socket) => {
      socket.end('被子进程处理');
    });
  }
});