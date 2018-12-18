var babel = require("babel-core");

var result = babel.transform("code();");

console.log(result.code);
console.log(result.map);
console.log(result.ast);