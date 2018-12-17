/*
* @Author: gaopeng
* @Email:  gaopeng_hdu@163.com
* @Date:   2018-04-18 14:34:50
* @Last Modified by:   gaopeng
* @Last Modified time: 2018-04-18 14:47:31
*/

'use strict';
/*
* @function DataHub
* 被观察目标
*/
var DownloadTaskList = require('./observer').DownloadTaskList;

function DataHub(argument) {
	this.downloadTasks = new DownloadTaskList();
}

DataHub.prototype.addDownloadTask = function (downloadTask) {
	this.downloadTasks.add(downloadTask);
}

DataHub.prototype.removeDownloadTask = function(downloadTask) {
  this.downloadTasks.remove(downloadTask);
};

DataHub.prototype.notify = function (url) {
	const downloadTaskCount = this.downloadTasks.getCount();
	for (var i = 0; i < downloadTaskCount; i++) {
		this.downloadTasks.get(i).finish(url);
	}
}

module.exports = DataHub;