import default1 from './demo.js';

export { default as default2 } from './demo.js';

// 下面两行保证所有内容全部导出
export * from './demo.js';

export default default1;

console.log('default',  default1);
