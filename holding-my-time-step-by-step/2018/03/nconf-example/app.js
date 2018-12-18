var fs = require('fs'),
	path = require('path'),
	nconf = require('nconf');

// 数据来源
// 1. 通过命令行
// 2. 环境变量
// 3. 文件

nconf.argv()
	.env()
	.file({ file: path.join(__dirname, '/config.json')})

// 设置变量
nconf.set('database:host', '127.0.0.1');
nconf.set('database:port', 5984);

// 获取nconf的值
console.log('foo: ' + nconf.get('foo'));
console.log('NODE_ENV: ' + nconf.get('NODE_ENV'));

// 保存配置
nconf.save(function (err) {
	fs.readFile(path.join(__dirname, '/config.json'), function (err, data) {
		console.dir(JSON.parse(data.toString()));
	});
});

console.log(__dirname);
console.log(__filename);
console.log(process.cwd());
console.log(path.resolve('./'));