/*
* @Author: gaopeng
* @Email:  gaopeng_hdu@163.com
* @Date:   2018-08-11 14:23:11
* @Last Modified by:   gaopeng
* @Last Modified time: 2018-08-11 14:36:35
*/

'use strict';
const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
	console.log(`主进程 ${process.pid} 正在运行`);
	// 衍生工作进程。
	for (let i = 0; i < numCPUs; i++) {
    	cluster.fork();
  	}
  	cluster.on('exit', (worker, code, signal) => {
    	console.log(`工作进程 ${worker.process.pid} 已退出`);
  	});
} else {
  	// 工作进程可以共享任何 TCP 连接。
  	// 在本例子中，共享的是一个 HTTP 服务器。
 	http.createServer((req, res) => {
    	res.writeHead(200);
    	res.end('你好世界\n');
  	}).listen(8000);

  	console.log(`工作进程 ${process.pid} 已启动`);
}
console.log('hello'); 

// 负载均衡多用
// 主进程 59053 正在运行
// hello
// 工作进程 59054 已启动
// hello
// 工作进程 59056 已启动
// hello
// 工作进程 59055 已启动
// hello
// 工作进程 59057 已启动
// hello