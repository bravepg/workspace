/*
* @Author: gaopeng
* @Email:  gaopeng_hdu@163.com
* @Date:   2018-04-03 13:42:43
* @Last Modified by:   gaopeng
* @Last Modified time: 2018-04-03 16:52:47
*/

'use strict';

var url = require('url'),
	UserModel = require('../models/user'),
	jwt = require('jwt-simple');

module.exports = function (req, res, next) {
	// Parse the URL, we might need this
	var parsed_url = url.parse(req.url, true);

	var token = (req.body && req.body.token) || parsed_url.query.access_token || req.headers['x-access-token'];
	if (token) {
		try {
			console.log(req)
			var decoded = jwt.decode(token, req.app.get('jwtTokenSecret'));

			if (decoded.exp <= Date.now()) {
				res.end('Access token has expired', 400)
			}
			UserModel.findOne({ '_id': decoded.iss }, function (err, user) {

				if (!err) {					
					req.user = user;									
					return next();
				}
			})
		} catch (err) {
			return next()
		}
	} else {
		return next()
	}
}