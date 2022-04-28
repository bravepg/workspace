class PriotityQueue {
  constructor() {
    this.dataSource = [];
  }
  enqueue(element) {
    this.dataSource.push(element);
  }
  dequeue() {
    let priority = this.dataSource[0].code;
    let index = 0;
    for (let i = 0; i < this.dataSource.length; i++) {
      if (this.dataSource[i].code < priority) {
        priority = this.dataSource[i].code;
        index = i;
      }
    }
    return this.dataSource.splice(index, 1);
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

class Patient {
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }
}

module.exports = Queue;
