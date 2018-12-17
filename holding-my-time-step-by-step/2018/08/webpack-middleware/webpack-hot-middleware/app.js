/*
* @Author: gaopeng
* @Email:  gaopeng_hdu@163.com
* @Date:   2018-08-14 16:22:00
* @Last Modified by:   gaopeng
* @Last Modified time: 2018-08-14 16:53:12
*/

'use strict';

import { init } from './src/js/index';
// 重要，知会 webpack 允许此模块的热更新
if (module.hot) {
    module.hot.accept();
}
init();