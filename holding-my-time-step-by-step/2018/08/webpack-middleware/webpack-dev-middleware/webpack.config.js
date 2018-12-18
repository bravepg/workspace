let path = require('path');

module.exports = {
	entry: './app.js',
	output: {
		publicPath: "/assets/",
		filename: 'bundle.js'
	}
}