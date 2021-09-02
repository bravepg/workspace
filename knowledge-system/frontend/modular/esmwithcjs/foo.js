// export const foo = 'foo';
// const bar = require('./bar.mjs');
// console.log('bar', bar);
(async () => {
  const bar = await import('./bar.mjs');
  console.log('bar', bar);
})();
module.exports = {
  foo: 'foo',
};