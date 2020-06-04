function Node(element) {
  this.element = element;
  this.next = null;
}

// 单向链表
// 链表的定义
// 具有哪些属性
// 1. head 头部节点
// 具有哪些方法
// 1. insert 插入
// 2. remove 删除
// 3. find 查找
// 4. dispaly 展示
class LinkedList {
  constructor() {
    this.head = new Node('head');
    this.head.next = this.head;
  }
  insert(newElement, item) {
    const newNode = new Node(newElement);
    const currNode = this.find(item);
    newNode.next = currNode.next;
    currNode.next = newNode;
  }
  remove(item) {
    const preNode = this.findPrevious(item);
    // const currNode = this.find(item); // 可以不用 currNode 进行判断
    // preNode.next = currNode.next;
    preNode.next = preNode.next.next;
  }
  findPrevious(item) {
    let preNode = this.head;
    while(preNode.next && preNode.next.element !== item) {
      preNode = preNode.next;
    }
    console.log('preNode', preNode);
    return preNode;
  }
  find(item) {
    let currNode = this.head;
    while(currNode.element !== item) {
      currNode = currNode.next;
    }
    return currNode;
  }
  display() {
    let currNode = this.head;
    console.log(currNode.element);
    while (currNode.next !== null && currNode.next.element !== 1) {
      console.log(currNode.next.element);
      currNode = currNode.next;
    }
  }
}

// const linkedList = new LinkedList();
// linkedList.insert('12', 'head');
// linkedList.insert('34', '12');
// linkedList.insert('56', 'head');
// linkedList.display();
// linkedList.remove('12');
// linkedList.display();

function DoubleNode(element) {
  this.element = element;
  this.next = null;
  this.previous = null;
}

class DoubleLinkedList {
  constructor() {
    this.head = new DoubleNode('head');
  }
  find(item) {
    let currNode = this.head;
    while (currNode.element !== item) {
      currNode = currNode.next;
    }
    return currNode;
  }
  insert(newElement, item) {
    const newNode = new DoubleNode(newElement);
    const current = this.find(item);
    newNode.next = current.next;
    newNode.previous = current;
    if (current.next) {
      current.next.previous = newNode; // 关键点
    }
    current.next = newNode;
  }
  remove(item) {
    const currNode = this.find(item);
    currNode.previous.next = currNode.next;
    currNode.next.previous = currNode.previous;
  }
  display() {
    let currNode = this.head;
    while (currNode.next !== null) {
      console.log(currNode.next.element);
      currNode = currNode.next;
    }
  }
}

// const doublelinkedList = new DoubleLinkedList();
// doublelinkedList.insert('12', 'head');
// doublelinkedList.insert('34', '12');
// doublelinkedList.insert('56', 'head');
// doublelinkedList.remove('12');
// doublelinkedList.display();

// 测试链表和数组的插入效率
const arr = [];
const list = new LinkedList();
for (let i = 0; i < 10000; i++) {
  arr.push(i);
  list.insert(i, 'head');
}
// console.log(arr, list);
// console.log(new Date().getTime());
for (let i = 0; i < 10000; i++) {
  arr.splice(9999 + i, 0, 10000 + i);
}
// console.log(new Date().getTime());
for (let i = 0; i < 10000; i++) {
  list.insert(10000 + i, 'head');
}
// console.log(new Date().getTime());


function survive(n, m) {
  const linkedList = new LinkedList();
  linkedList.head.element = 1;
  for (i = 1; i < n; i++) {
    linkedList.insert(i + 1, i);
  }
  let index = 1;
  let count = 0;
  let item = linkedList.head;
  while (index < m && (count + m) <= n) {
    item = item.next;
    index++;
    if (index === m) {
      console.log(item.element)
      linkedList.remove(item.element);
      count++;
      index = 0;
    }
  }
  linkedList.display();
}
// survive(40, 3);

const linkedList = new LinkedList();
linkedList.insert(1, 'head');
linkedList.insert(2, 1);
linkedList.remove('head');
linkedList.display();
console.log(linkedList);


// 约瑟夫环 JavaScriprt 数组版本实现，太简单了
// 类似的队列也可以解决这个问题
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let index = 0;
while (arr1.length >= 3) {
  console.log(index + 2, arr1.length, (index + 2) % arr1.length, '-----')
  index = (index + 2) % arr1.length;
  console.log(index, arr1.length, arr1[index]);
  arr1.splice(index, 1);
}
console.log('arr1', arr1);