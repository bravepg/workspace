// process.stdin.setEncoding('utf8');

// // readable 事件和 read 方法 成对出现，如果使用 data 事件无法获取
// process.stdin.on('readable', () => {
// 	const chunk = process.stdin.read();
// 	if (chunk !== null) {
//     	process.stdout.write(`data: ${chunk}`);
//   	}
// });

// process.stdin.on('end', () => {
//   	process.stdout.write('end');
// });

// 开发过程中应该尽量避免使用 readable ，采用下面的事件

// process.stdin.on('data', (data) => {
//   	console.log('data', data);
// });

// process.stdin.pipe(process.stdout);


/*1:声明变量*/
var num1, num2;
/*2：向屏幕输出，提示信息，要求输入num1*/
process.stdout.write('请输入num1的值：');
/*3：监听用户的输入*/
process.stdin.on('data', function (chunk) {
    if (!num1) {
        num1 = Number(chunk);
        /*4：向屏幕输出，提示信息，要求输入num2*/
        process.stdout.write('请输入num2的值：');
    } else {
        num2 = Number(chunk);
        process.stdout.write('结果是：' + (num1 + num2));
        // process.kill(process.pid);
    }
});

// process.stdout.on('resize', () => {
//   	console.log('窗口大小发生变化！');
//   	console.log(`${process.stdout.columns}x${process.stdout.rows}`);
// });