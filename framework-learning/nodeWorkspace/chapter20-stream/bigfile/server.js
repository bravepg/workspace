const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
  // 一次全部写入内存，内存爆增
  // fs.readFile('./big.file', (err, data) => {
  //   if (err) throw err;

  //   res.end(data);
  // });
  const src = fs.createReadStream('./big.file');
  src.pipe(res);
});

server.listen(8000);