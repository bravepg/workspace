/*
* @Author: gaopeng
* @Email:  gaopeng_hdu@163.com
* @Date:   2018-04-18 13:39:22
* @Last Modified by:   gaopeng
* @Last Modified time: 2018-04-18 14:01:08
*/

'use strict';

function require(p) {
	var path = require.resolve(p);
	var mod = require.modules[path];
	if (!mod) throw new Error('failed to require "' + p + '"');
	if (!mod.exports) {
		mod.exports = {};
		mod.call(mod.exports, mod, mod.exports, require.relative(path));
	}
	console.log(mod)
	return mod.exports;
}

require.modules = {};

require.register = function (path, fn) {
	require.modules[path] = fn;
}

require.resolve = function (path) {
	var orig = path;
	var reg = path + '.js';
	var index = path + '/index.js';
	return require.modules[reg] && reg
		|| require.modules[index] && index
		|| orig;
}

require.relative = function (parent) {
	return function (p) {
		if ('.' != p.charAt(0)) return require(p);
		var path = parent.split('/');
		var segs = p.split('/');
		path.pop();

		for (var i = 0; i < segs.length; i++) {
	      var seg = segs[i];
	      if ('..' == seg) path.pop();
	      else if ('.' != seg) path.push(seg);
	    }

	    return require(path.join('/'));
	};
}