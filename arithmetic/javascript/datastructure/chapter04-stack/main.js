// 1. 后入先出
class StackByArr {
  constructor() {
    // 1. 具有元素列表
    // 2. 具有记录栈顶位置顶属性
    this.dataStore = [];
    this.top = 0;
  }
  pop() {
    return this.dataStore.splice(--this.top, 1)[0];
  }
  push(element) {
    this.dataStore[this.top++] = element;
  }
  peek() {
    return this.dataStore[this.top - 1];
  }
  clear() {
    this.dataStore = [];
    this.top = 0;
  }
  length() {
    return this.top;
  }
}

const stack = new StackByArr();
stack.push('gao');
console.log(stack);

module.exports = StackByArr;
