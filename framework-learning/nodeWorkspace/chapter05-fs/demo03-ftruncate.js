var fs = require('fs');

console.log(fs.readFileSync('message.txt', 'utf8'));  // data to appenddata to append


// 获取要截断的文件的文件描述符
const fd = fs.openSync('message.txt', 'r+');

// 截断文件至前4个字节
fs.ftruncate(fd, 4, (err) => {
  	console.log(fs.readFileSync('message.txt', 'utf8'));
});