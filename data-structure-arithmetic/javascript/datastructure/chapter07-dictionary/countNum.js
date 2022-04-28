const Dictionary = require('./main');

const dict = new Dictionary();

const strArr = 'the brown fox jumped over the blue fox fox'.split(' ');

for (let key of strArr) {
  const value = dict.find(key);
  dict.add(key, value ? value + 1 : 1);
}
dict.showAll();