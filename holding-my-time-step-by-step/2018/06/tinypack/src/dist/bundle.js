
    (function(modules) {
      function require(fileName) {
        const fn = modules[fileName];
        const module = { exports : {} };
        fn(require, module, module.exports);
        return module.exports;
      }
      require('./index.js');
    })({'./index.js': function (require, module, exports) { /*
* @Author: gaopeng
* @Email:  gaopeng_hdu@163.com
* @Date:   2018-06-11 10:28:54
* @Last Modified by:   gaopeng
* @Last Modified time: 2018-06-11 10:29:41
*/

'use strict';

var _test = require("./test");

var _test2 = _interopRequireDefault(_test);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log(_test2.default); },'./test': function (require, module, exports) { /*
* @Author: gaopeng
* @Email:  gaopeng_hdu@163.com
* @Date:   2018-06-11 10:29:16
* @Last Modified by:   gaopeng
* @Last Modified time: 2018-06-11 10:30:11
*/

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _message = require("./message");

var _message2 = _interopRequireDefault(_message);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var a = 'hello' + _message2.default;

exports.default = a; },'./message': function (require, module, exports) { /*
* @Author: gaopeng
* @Email:  gaopeng_hdu@163.com
* @Date:   2018-06-11 10:29:07
* @Last Modified by:   gaopeng
* @Last Modified time: 2018-06-11 10:29:56
*/

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var b = 'world';

exports.default = b; },})
  