// 列表的定义
// 具有哪些属性
// 1. 列表的元素个数 listSize
// 2. 列表中的元素 dataStore
// 3. 列表中的元素是可以自由移动的，记录列表的当前位置 pos
// 具有哪些方法
// 1. 与第一点属性对应的 length 方法
// 2. append 追加元素方法
// 3. remove 从列表中移除指定元素
// 4. find 查找列表中指定元素
// 5. toString 显示列表（严格说来，该方法返回的是一个数组，而不是一个字符串）
// 6. insert 在指定位置插入元素
// 7. clear 清空元素
// 8. contains 是否包含某个元素
// 关于列表移动的一组方法
// 9. front
// 10. end
// 11. prev
// 12. next
// 13. moveTo
// 14. getElement 返回对前位置对应的元素
// 15. currentPos 当前位置

function List() {
  // 空数组保存列表元素
  this.dataStore = [];
  // 列表当前的元素个数
  this.listSize = 0;
  // 列表的当前位置
  this.pos = 0;
}

// 获取数组长度的方法
List.prototype.length = function() {
  return this.listSize;
}

// 追加元素
List.prototype.append = function(element) {
  // this.dataStore.push(element);
  // this.listSize++;
  // 上面的代码合并为
  this.dataStore[this.listSize++] = element;
}

// 移除元素
List.prototype.remove = function(element) {
  const index = this.find(element);
  if (index > -1) {
    this.dataStore.splice(index, 1);
    --this.listSize;
    return true;

  }
  return false;
}

// 查找元素
List.prototype.find = function(element) {
  for (let i = 0; i < this.listSize; i++) {
    if (this.dataStore[i] === element) {
      return i;
    }
  }
  return -1;
}

// 显示列表
List.prototype.toString = function() {
  return this.dataStore;
}

// 指定位置插入元素
List.prototype.insert = function(element, after) {
  const insertPos = this.find(after);
  if (insertPos > -1) {
    this.dataStore.splice(insertPosm, 0, after);
    ++this.listSize;
    return true;
  }
  return false;
}

// 清空元素
List.prototype.clear = function() {
  this.dataStore = [];
  this.listSize = this.pos = 0;
}

// 判断是否包含某个元素
List.prototype.contains = function(element) {
  for (let i = 0; i < this.listSize; i++) {
    if (this.dataStore[i] === element) {
      return true;
    }
  }
  return false;
}

List.prototype.currentPos = function() {
  return this.pos;
}

List.prototype.front = function() {
  this.pos = 0;
}

List.prototype.end = function() {
  this.pos = this.listSize ?  this.listSize - 1 : 0;
}

List.prototype.prev = function() {
  if (this.pos) --this.pos;
}

List.prototype.next = function() {
  if (this.pos < this.listSize) this.pos++;
}

List.prototype.moveTo = function(position) {
  this.pos = position;
}

List.prototype.getElement = function() {
  return this.dataStore[this.pos];
}
const names = new List();
names.append('gao');
names.append('yao');

for (names.front(); names.currentPos() < names.length(); names.next()) {
  console.log(names.getElement());
}

module.exports = List;
