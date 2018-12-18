var fs = require('fs');
var data = '';
// 创建可读流
var readStream = fs.createReadStream('output.txt');
// 设置编码
readStream.setEncoding("utf-8");

// 处理事件流 data, end, error
readStream.on('data', function (chunk) {
    data += chunk;
});

readStream.on('end', function() {
    console.log(data);
});

readStream.on('error', function(err) {
    console.log(err.stack);
});

console.log("程序执行完毕");




// // 写入流
// var fs = require('fs');
// var data = '菜鸟教程官网地址：www.runoob.com';

// // 创建一个写入流，写入到文件output.txt中
// var writeStream = fs.createWriteStream('output.txt');

// writeStream.write(data, 'utf-8');

// writeStream.end();

// writeStream.on('finish', function() {
//     console.log("写入完成");
// });

// writeStream.on('error', function(err) {
//     console.log(err.stack);
// });

// console.log("程序执行完毕");


// // 管道流
// var fs = require('fs');

// // 创建一个可读流
// var readStream = fs.createReadStream('input.txt');

// // 创建一个可写流
// var writeStream = fs.createWriteStream('output.txt');

// // 管道读写操作
// readStream.pipe(writeStream);
// console.log("程序执行完毕");