let counter = 3;
const person = {
  name: 'gao'
};
function getName() {
  return person.name;
}
function getCounter() {
  return counter;
}
function incCounter() {
  counter++;
}
exports.mod = {
  counter: counter,
  person: person,
  getName: getName,
  getCounter: getCounter,
  incCounter: incCounter,
};
exports.counter = counter;