/*
* @Author: gaopeng
* @Email:  gaopeng_hdu@163.com
* @Date:   2018-08-09 22:41:44
* @Last Modified by:   gaopeng
* @Last Modified time: 2018-08-11 15:16:06
*/

'use strict';
console.log(`Starting directory: ${process.cwd()}`);

// try {
// 	process.chdir('/tmp1');
// 	console.log(`New directory: ${process.cwd()}`);
// } catch (err) {
//   	console.error(`chdir: ${err}`);
// 

// const startUsage = process.cpuUsage();
// console.log(startUsage);
// // { user: 38579, system: 6986 }

// // spin the CPU for 500 milliseconds
// const now = Date.now();
// while (Date.now() - now < 500);

// console.log(process.cpuUsage(startUsage));
// // { user: 514883, system: 11226 }



// process.emitWarning('Something happened!', {
//   	code: 'MY_WARNING',
//   	detail: 'This is some additional information'
// });

// process.on('warning', (warning) => {
//   	console.warn(warning.name);    // 'Warning'
//   	console.warn(warning.message); // 'Something happened!'
//   	console.warn(warning.code);    // 'MY_WARNING'
//   	console.warn(warning.stack);   // Stack trace
//   	console.warn(warning.detail);  // 'This is some additional information'
// });


// if (process.getegid) {
// 	// 组身份
//   	console.log(`Current gid: ${process.getegid()}`);  // Current gid: 20
// }

// if (process.getgid) {
// 	// 组身份
//   	console.log(`Current gid: ${process.getgid()}`);  // Current gid: 20
// }

// if (process.geteuid) {
// 	// 用户身份
//   	console.log(`Current uid: ${process.geteuid()}`);  // Current uid: 501
// }

// if (process.getuid) {
// 	// 用户身份
//   	console.log(`Current uid: ${process.getuid()}`);   // Current uid: 501
// }


process.on('SIGHUP', () => {
  	console.log('Got SIGHUP signal.');
});

setTimeout(() => {
  	console.log('Exiting.');
  	process.exit(0);
}, 100);

process.kill(process.pid, 'SIGHUP');


