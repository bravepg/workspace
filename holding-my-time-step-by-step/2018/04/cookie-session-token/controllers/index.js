var account = require('./account.js');
var auth = require('./auth.js');

module.exports.set = function(app) {
	account.set(app);
	auth.set(app);
}