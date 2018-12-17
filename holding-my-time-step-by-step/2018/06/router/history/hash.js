/*
* @Author: gaopeng
* @Email:  gaopeng_hdu@163.com
* @Date:   2018-06-30 10:36:43
* @Last Modified by:   gaopeng
* @Last Modified time: 2018-06-30 13:11:27
*/

'use strict';
import { Base, match } from './base';

export class HashHistory extends Base {
	constructor(router) {
		super(router);
		this.ensureSlash();
		window.addEventListener('hashchange', () => {
			this.transitionTo(this.getCurrentLocation());
		});
	}

	ensureSlash() {
		const path = this.getCurrentLocation();
		console.log('path', path);
		if (path.charAt(0) === '/') {
			return true;
		}
		changeUrl(path);
		return false;
	}

	getCurrentLocation() {
		const href = window.location.href;
	    const index = href.indexOf('#');
	    return index === -1 ? '' : href.slice(index + 1);
	}

	push(location) {
		const targetRoute = match(location, this.router.routes);
		this.transitionTo(targetRoute, () => {
	      changeUrl(this.current.fullPath.substring(1));
	    });
	}
	replaceState (location) {
	    const targetRoute = match(location, this.router.routes)

	    this.transitionTo(targetRoute, () => {
	      	changeUrl(this.current.fullPath.substring(1), true);
	    });
	};
}

function changeUrl(path, replace) {
	const href = window.location.href;
	const i = href.indexOf('#');
	const base = i >= 0 ? href.slice(0, i) : href;
	if (replace) {
		window.history.replaceState({}, '', `${base}#/${path}`);
	} else {
		window.history.pushState({}, '', `${base}#/${path}`);
	}
};