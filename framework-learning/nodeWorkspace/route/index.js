/*
* @Author: viruser
* @Date:   2016-12-26 16:01:39
* @Last Modified by:   viruser
* @Last Modified time: 2016-12-26 16:02:40
*/

'use strict';
var server = require('./server');
var router = require('./router');

server.start(router.route);