/*
* @Author: gaopeng
* @Email:  gaopeng_hdu@163.com
* @Date:   2018-04-18 17:09:22
* @Last Modified by:   gaopeng
* @Last Modified time: 2018-04-18 17:31:23
*/

'use strict';

function Login() {
	this.list = {};
}

Login.prototype.listen = function (key, fn) {
	if (!(key in this.list)) {
		this.list[key] = [];
	}
	this.list[key].push(fn);
}

Login.prototype.trigger = function () {

	var args = [].slice.call(arguments),
		key = args[0],
		fns = this.list[key];
	if (!fns || !fns.length) {
		return;
	}
	for (var i = 0; i <fns.length; i++) {
		if (fns[i]) {
			fns[i].apply(this, arguments);
		}
	}
}

var login = new Login();
var nav = (function () {
	login.listen( 'loginSucc', function( data ){
		nav.setAvatar( data.avatar );
	}); 
	return {
		setAvatar: function( avatar ) { 
			console.log( '设置 nav 模块的头像' );
		}
	}
})();

login.trigger('loginSucc', 2000)