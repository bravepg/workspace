const fromArray = require('from2-array');
const through = require('through2');
const fs = require('fs');

function concatFiles(destination, files, callback) {
  const destStream = fs.createWriteStream(destination);
  fromArray.obj(files)  // 将 files 数组转换为 Streams 来实现对 files 数组的顺序迭代
    .pipe(through.obj((file, enc, done) => {  // 创建一个转换的 Streams 来处理序列中的每个文件
      const src = fs.createReadStream(file);
      src.pipe(destStream, { end: false} );
      src.on('end', done);
    }))
    .on('finish', () => {
      destStream.end();
      callback();
    });
}

concatFiles(process.argv[2], process.argv.slice(3), () => {
  console.log('Files concatenated successfully');
});