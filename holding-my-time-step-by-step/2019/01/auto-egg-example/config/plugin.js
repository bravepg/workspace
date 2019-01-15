'use strict';

// had enabled by egg
// exports.static = true;
const path = require('path');
exports.ua = {
  enable: true,
  path: path.join(__dirname, '../lib/plugin/egg-ua'),
};

// exports.validate = {
//   enable: true,
//   package: 'egg-validate',
// }