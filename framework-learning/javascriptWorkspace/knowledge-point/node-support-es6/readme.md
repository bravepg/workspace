1. 通过 babel 可以将 import 和 export default 转换成 CommonJS 下的 require 和 module.exports
2. 在nodeJS环境下，默认可以使用require 和 module.exports，但是通过1中，了解也可以使用import 和 export default
3. 在浏览器环境下，由于没有module exports require global这些环境变量，需要通过Browserify进行转换