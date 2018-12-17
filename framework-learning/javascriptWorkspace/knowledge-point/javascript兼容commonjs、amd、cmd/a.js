/*
* @Author: gaopeng
* @Email:  gaopeng_hdu@163.com
* @Date:   2017-11-21 10:42:12
* @Last Modified by:   gaopeng
* @Last Modified time: 2017-11-21 10:50:36
*/

'use strict';

;(function(){
    function MyModule() {
        console.log("gaopeng");
    }
    
    var moduleName = MyModule;
    if (typeof module !== 'undefined' && typeof exports === 'object') {
        module.exports = moduleName;
    } else if (typeof define === 'function' && (define.amd || define.cmd)) {
        define(function() { return moduleName; });
    } else {
        this.moduleName = moduleName;
    }
}).call(this || (typeof window !== 'undefined' ? window : global));