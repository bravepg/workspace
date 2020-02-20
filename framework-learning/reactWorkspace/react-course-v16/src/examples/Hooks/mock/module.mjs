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

// node --experimental-modules main.mjs
export default {
  counter,
  person: person,
  getName: getName,
  getCounter: getCounter,
  incCounter: incCounter,
};
export { counter };