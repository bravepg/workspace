const StackByArr = require('./main');

function mulBase(num, base) {
  const stack = new StackByArr();
  while (num != 0) {
    stack.push(num % base);
    num = Math.floor(num / base);
  }
  let covert = '';
  while(stack.top) {
    covert += stack.pop();
  }
  return covert;
}
console.log(mulBase(10, 2));