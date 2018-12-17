/*
* @Author: gaopeng
* @Email:  gaopeng_hdu@163.com
* @Date:   2018-06-30 10:02:08
* @Last Modified by:   gaopeng
* @Last Modified time: 2018-06-30 10:05:31
*/

'use strict';

export const isBroswer = window !== undefined;

export const supportsPushState = isBroswer && (function () {
	const ua = window.navigator.userAgent;

	if (
	(ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) &&
	ua.indexOf('Mobile Safari') !== -1 &&
    ua.indexOf('Chrome') === -1 &&
    ua.indexOf('Windows Phone') === -1) {
		return false;
	}

	return window.history && 'pushState' in window.history;
})();