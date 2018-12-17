/*
* @Author: gaopeng
* @Email:  gaopeng_hdu@163.com
* @Date:   2018-04-18 14:22:25
* @Last Modified by:   gaopeng
* @Last Modified time: 2018-04-18 14:40:17
*/

'use strict';
/*
* @function DownloadTask
* @定义一个观察者
*/

function DownloadTask(id) {
	this.id = id;
	this.loaded = false;
	this.url = null;
}

DownloadTask.prototype.finish = function (url) {
	this.loaded = true;
	this.url = url;
	console.log('Task ' + this.id + ' load data from ' + url);
}

/*
* @function DownloadTaskList
* @定义一个观察者集合方便管理多个观察者
*/
function DownloadTaskList() {
	this.downloadTaskList = [];
}

DownloadTaskList.prototype.getCount = function (argument) {
	return this.downloadTaskList.length;
}

DownloadTaskList.prototype.get = function(index) {
  return this.downloadTaskList[index];
};

DownloadTaskList.prototype.add = function(obj) {
  return this.downloadTaskList.push(obj);
};

DownloadTaskList.prototype.remove = function (obj) {
	const downloadTaskCount = this.downloadTaskCount.getCount();
	while (i < downloadTaskCount) {
    if (this.downloadTaskList[i] === obj) {
    	this.downloadTaskList.splice(i, 1);
    	break;
    }
    i++;
  }
}

module.exports = {
	DownloadTask,
	DownloadTaskList
};