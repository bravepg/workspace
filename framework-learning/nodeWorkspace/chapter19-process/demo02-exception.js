// var fs = require('fs');

// process.on('unhandledRejection', (reason, p) => {
// 	console.log('未处理的 rejection：', p, '原因：', reason);
// 	// 记录日志、抛出错误、或其他逻辑。
// });

// process.on('rejectionHandled', (p) => {
//   	console.log('处理后的 rejection：', p,);
// });

// function SomeResource() {
//   	// 将 loaded 的状态设置为一个 rejected promise。
//   	this.loaded = Promise.reject(new Error('错误信息'));
// }

// const resource = new SomeResource();
// // resource.loaded 上没有 .catch 或 .then。

// function HandleSomeResource() {
//   	// 将 loaded 的状态设置为一个 rejected promise。
//   	this.loaded = Promise.reject(new Error('错误信息')).catch((e) => {process.emit('rejectionHandled', e)});
// }

// const handleResource = new HandleSomeResource();
// // handleResource.loaded 有 .catch。

// process.on('uncaughtException', (err) => {
//   	fs.writeSync(1, `捕获到异常：${err}\n`);
// });

// setTimeout(() => {
//   	console.log('这里仍然会运行。');
// }, 500);

// // 故意调用一个不存在的函数，应用会抛出未捕获的异常。
// nonexistentFunc();
// console.log('这里不会运行。');



// Begin reading from stdin so the process does not exit.
process.stdin.resume();

process.on('SIGINT', () => {
  console.log('Received SIGINT.  Press Control-D to exit.');
});

process.abort();