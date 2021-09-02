// a.mjs
import { bar } from './b.mjs';
console.log('a.mjs');
console.log(bar());
function foo() { return 'foo' }
export { foo };

