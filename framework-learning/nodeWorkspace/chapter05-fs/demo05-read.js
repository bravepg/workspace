var fs = require('fs');
// var path = require('path');

fs.readdir(__dirname, (err, files) => {
	console.log(files);
});

fs.readFile('/etc/passwd', 'utf8', (err, data) => {
  	if (err) throw err;
  	console.log(data);
});