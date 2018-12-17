/*
* @Author: gaopeng
* @Date:   2017-02-20 14:08:31
* @Last Modified by:   gaopeng
* @Last Modified time: 2017-02-20 14:10:03
*/

'use strict';
var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var BearSchema = new Schema({
    name: String
});

module.exports = mongoose.model('Bear', BearSchema);