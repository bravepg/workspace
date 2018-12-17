/*
* @Author: gaopeng
* @Email:  gaopeng_hdu@163.com
* @Date:   2018-04-18 14:52:32
* @Last Modified by:   gaopeng
* @Last Modified time: 2018-04-18 15:03:15
*/

'use strict';
/*
* @function DownloadManager
* 定义管理通道
*/

function DownloadManager() {
	this.events = {};
	this.uId = -1;
}

DownloadManager.prototype.publish = function (eventType, url) {
	if (!this.events[eventType]) {
		return false;
	}
	var subscribers = this.events[eventType],
		count = subscribers ? subscribers.length : 0;

	while (count--) {
		var subscriber = subscribers[count];
		subscriber.handler(eventType, subscriber.taskId, url);
	}
}

DownloadManager.prototype.subscribe = function (eventType, handler) {
	if (!this.events[eventType]) {
		this.events[eventType] = [];
	}

	var taskId = (++this.uId).toString();

	this.events[eventType].push({
	    taskId: taskId,
	    handler: handler
	});

	return taskId;
}

module.exports = DownloadManager;