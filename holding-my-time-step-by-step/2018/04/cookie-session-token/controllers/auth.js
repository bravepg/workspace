var express = require('express'),
	bodyParser = require('body-parser'),
	UserModel = require('../models/user'),
	jwt = require('jwt-simple'),
	moment = require('moment');

module.exports.set = function (app) {
	app.get('/token', bodyParser.json(), function (req, res) {
		req.headers['username'] = 'bob';
		req.headers['password'] = 'password';
		if (req.headers.username && req.headers.password) {
			UserModel.findOne({ username: req.headers.username }, function (err, user) {
				if (err) {
					res.send('Authentication error', 401);
				}
				user.comparePassword(req.headers.password, function (err, isMatch) {
					if (err) {
						res.send('Authentication error', 401)
					}

					if (isMatch) {
						var expires = moment().add('days', 7).valueOf()		;		
						var token = jwt.encode(
							{
								iss: user.id,
								exp: expires
							}, 
							app.get('jwtTokenSecret')
						);
						res.json({
							token : token,
							expires : expires,
							user : user.toJSON()
						});
					} else {
						res.send('Authentication error', 401)
					}
				});
			});
		} else {
			res.send('Authentication error', 401)
		}
	});
};