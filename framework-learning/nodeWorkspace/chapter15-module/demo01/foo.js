const circle = require('./circle.js');
console.log(`半径为 4 的圆的面积是 ${circle.area(4)}`);


/**
 * 通过 Node.js 直接运行一个文件，require.main 会被设置为它的 module
 * require.main === module
 * 
 * module 提供了一个 filename 属性，通常等于 __filename
 */
console.log('require.main', require.main);