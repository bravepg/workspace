/*
* @Author: gaopeng
* @Email:  gaopeng_hdu@163.com
* @Date:   2018-04-03 14:15:02
* @Last Modified by:   gaopeng
* @Last Modified time: 2018-04-03 14:15:50
*/

'use strict';

module.exports.set = function (app) {
	app.get('/account', function (req, res) {
	  	res.send('This is the web directory account page');
	})
}