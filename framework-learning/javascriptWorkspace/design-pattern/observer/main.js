/*
* @Author: gaopeng
* @Email:  gaopeng_hdu@163.com
* @Date:   2018-04-18 14:39:26
* @Last Modified by:   gaopeng
* @Last Modified time: 2018-04-18 14:47:27
*/

'use strict';

var DataHub = require('./observe-des');
var DownloadTask = require('./observer').DownloadTask;

var dataHub = new DataHub();

var downloadTask1 = new DownloadTask(1);
var downloadTask2 = new DownloadTask(2);
dataHub.addDownloadTask(downloadTask1);
dataHub.addDownloadTask(downloadTask2);

dataHub.notify('http://somedomain.someaddress');