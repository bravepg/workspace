const HashTable = require('./main');
const hashTable = new HashTable();

function genRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function genStuData(arr) {
  for (let i = 0; i < arr.length; i++) {
    let num = '';
    for (let j = 1; j <=9; j++) {
      num += Math.floor(Math.random() * 10);
    }
    num += ' ' + genRandomInt(50, 100);
    arr[i] = num;
  }
}

const numStudents = 10;
const arrSize = 97;
const idLen = 9;
const students = new Array(numStudents);
genStuData(students);
for (let i = 0; i < students.length; i++) {
  hashTable.put(students[i]);
}
hashTable.showDistro();
  