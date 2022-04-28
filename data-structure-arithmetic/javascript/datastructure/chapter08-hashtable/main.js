class HashTable {
  constructor() {
    this.table = new Array(137);
    // 解决散列冲突——线性探测法
    this.values = [];
  }
  // 除留余数法
  simpleHash(data) {
    let total = 0;
    for (let i = 0; i < data.length; i++) {
      total += data.charCodeAt(i);
    }
    return total % this.table.length;
  }
  // 霍纳算法
  betterHash(data) {
    const H = 37;
    let total = 0;
    for (let i = 0; i < data.length; i++) {
      total += H * total + data.charCodeAt(i);
    }
    return total % this.table.length;
  }
  put(data) {
    const pos = this.betterHash(data);
    if (this.table[pos] === undefined) {
      this.table[pos] = data;
      this.values[pos] = data;
    } else {
      while(this.table[pos] !== undefined) {
        pos++;
      }
      this.table[pos] = data;
      this.values[pos] = data;
    }
  }
  get(key) {
    const hash = this.betterHash(key);
    // 不断去寻找 线性探测法存入的数据
    for (let i = hash; this.table[hash] !== undefined; i++) {
      if (this.table[hash] === key) {
        return this.values[hash];
      }
    }
    return undefined;
  }
  showDistro() {
    for (let key of this.table) {
      key && console.log(key);
    }
  }
}

const hashTable = new HashTable();
const someNames = ["Davi", "Jennifer", "Donnie", "Raymond",
  "Cynthia", "Mike", "Clayton", "Danny", "Jonathan"];
for (let i = 0; i < someNames.length; i++) {
  hashTable.put(someNames[i]); 
}
hashTable.showDistro();

module.exports = HashTable;