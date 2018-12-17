/*
* @Author: gaopeng
* @Email:  gaopeng_hdu@163.com
* @Date:   2018-04-18 14:58:49
* @Last Modified by:   gaopeng
* @Last Modified time: 2018-04-18 15:02:14
*/

'use strict';

var DataHub = require('./publish.js');
var DownloadManager = require('./manager.js');

// 创建一个数据发布中心
var dataHub = new DataHub();

// 创建一个事件通道
var downloadManager = new DownloadManager();

var dataLoader = function(eventType, taskId, url) {
  console.log('Task ' + taskId + ' load data from ' + url);
}

var downloadTask1 = downloadManager.subscribe('dataReady', dataLoader);

dataHub.notify('http://somedomain.someaddress', function(url){
  downloadManager.publish('dataReady', url);
});