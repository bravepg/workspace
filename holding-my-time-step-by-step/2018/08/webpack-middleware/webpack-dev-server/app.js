/*
* @Author: gaopeng
* @Email:  gaopeng_hdu@163.com
* @Date:   2018-08-14 16:22:00
* @Last Modified by:   gaopeng
* @Last Modified time: 2018-08-14 17:53:44
*/

'use strict';

import { init } from './src/js/index';
// 如果不加上改行，浏览器会刷新页面进行更新 live reload
// 而不是热更新
if (module.hot) {
    module.hot.accept();
}
init();