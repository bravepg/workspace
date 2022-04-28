const StackByArr = require('./main');
const opArr = ['+', '-', '*', '/', '(', ')'];

// 前缀表达式计算
// 从右往左计算
function calcPolishNotation(prefix) {
  const numStack = new StackByArr();
  for (let i = prefix.length - 1; i >= 0; i--) {
    if (!opArr.includes(prefix[i])) {
      numStack.push(prefix[i]);
    } else {
      const num1 = parseInt(numStack.pop());
      const num2 = parseInt(numStack.pop());
      // 前缀表达式是用栈顶元素去操作次顶元素
      switch (prefix[i]) {
        case '+':
          numStack.push(num1 + num2);
          break;
        case '-':
          numStack.push(num1 - num2);
          break;
        case '*':
          numStack.push(num1 * num2);
          break;
        case '/':
          numStack.push(num1 / num2);
          break;
        default:
          break;
      }
    }
  }
  return numStack.peek();
}

// 后缀表达式计算
// 从左往右计算
function calcReversePolishNotation(suffix) {
  const numStack = new StackByArr();
  for (let i = 0; i < suffix.length; i++) {
    if (!opArr.includes(suffix[i])) {
      numStack.push(suffix[i]);
    } else {
      const num1 = parseInt(numStack.pop());
      const num2 = parseInt(numStack.pop());
      // 后缀表达式是用次顶元素去操作栈顶元素
      switch (suffix[i]) {
        case '+':
          numStack.push(num2 + num1);
          break;
        case '-':
          numStack.push(num2 - num1);
          break;
        case '*':
          numStack.push(num2 * num1);
          break;
        case '/':
          numStack.push(num2 / num1);
          break;
        default:
          break;
      }
    }
  }
  return numStack.peek();
}

function toPolishNotation(expression) {
  const numStack = new StackByArr();
  const opStack = new StackByArr();
  for (let i = expression.length - 1; i >= 0; i--) {
    const op = expression[i];
    if (!opArr.includes(op)) {
      numStack.push(op);
    } else if (opStack.top === 0 || opStack.peek() === ')' || op === ')') {
      opStack.push(op);
    } else if (op === '(') {
      while (opStack.peek() !== ')') {
        numStack.push(opStack.pop());
      }
      opStack.pop();
    } else {
      while (priorityCompare(op, opStack.peek()) < 0 && opStack.top) {
        numStack.push(opStack.pop());
      }
      opStack.push(op);
    }
  }
  while(opStack.top) {
    numStack.push(opStack.pop());
  }
  return calcPolishNotation(numStack.dataStore.reverse().join(''));
}

function toReversePolishNotation(expression) {
  const numStack = new StackByArr();
  const opStack = new StackByArr();
  for (let i = 0; i < expression.length; i++) {
    const op = expression[i];
    if (!opArr.includes(op)) {
      numStack.push(op);
    } else if (opStack.top === 0 || opStack.peek() === '(' || op === '(') {
      opStack.push(op);
    } else if (op === ')') {
      while (opStack.peek() !== '(') {
        numStack.push(opStack.pop());
      }
      opStack.pop();
    } else {
      while (priorityCompare(op, opStack.peek()) < 0 && opStack.top) {
        numStack.push(opStack.pop());
      }
      opStack.push(op);
    }
  }
  while(opStack.top) {
    numStack.push(opStack.pop());
  }
  return calcReversePolishNotation(numStack.dataStore.join(''));
}

function priorityCompare(op1, op2) {
  switch(op1) {
    case '+':
    case '-':
      return (op2 == '*' || op2 == '/' ? -1 : 0);
    case '*':
    case '/':
        return (op2 == '+' || op2 == '-' ? 1 : 0);
    return 1;
  }
}

console.log(toPolishNotation('(3+4)*(5-6)'));
console.log(toReversePolishNotation('(3+4)*(5-6)'));
