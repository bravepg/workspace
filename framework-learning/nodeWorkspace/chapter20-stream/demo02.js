var fs = require('fs');
var stream = require('stream');

// const readable = new stream.Readable();
const readable = fs.createReadStream('output.txt')
console.log(readable.isPaused()); // === false   // 为什么第一次调用 返回false，是由于内部实现机制 readableFlowing 返回的是 null
// https://areknawo.com/node-js-file-streams-explained/

readable.pause();
readable.isPaused(); // === true
// readable.resume();
// readable.isPaused(); // === false

// read 方法，在暂停态才有必要调用
// 流动态时，该方法是自动调用的，直到系统缓存之中的数据被读光。
// readable.on('readable', function() {
//   var chunk;
//   while (null !== (chunk = readable.read())) {
//     console.log('chunk', chunk)
//     console.log('got %d bytes of data', chunk.length);
//   }
// });

// 调用 resume 会变成动态流，虽然没有 data 事件接收，依然会触发 end 事件
// readable.resume();
// readable.on('end', function() {
//   console.log('数据流到达尾部，未读取任务数据');
// });