var fs = require('fs');

fs.mkdir('temp', (err) => {
	console.log(err);   // 文件夹已经存在
});