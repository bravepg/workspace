class Queue {
  constructor() {
    this.dataSource = [];
  }
  enqueue(element) {
    this.dataSource.push(element);
  }
  dequeue() {
    return this.dataSource.shift();
  }
  length() {
    return this.dataSource.length;
  }
  clear() {
    this.dataSource = [];
  }
  front() {
    return this.dataSource[0];
  }
  back() {
    return this.dataSource[this.dataSource.length - 1];
  }
  empty() {
    return !this.dataSource.length
      ? true : false;
  }
  toString() {
    let retStr = '';
    for (let i = 0; i < this.dataSource.length; i++) {
      retStr += `${this.dataSource[i]}\n`;
    }
    return retStr;
  }
}

module.exports = Queue;
