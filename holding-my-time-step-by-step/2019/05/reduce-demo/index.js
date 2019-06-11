const funs = [
  () => { console.log(1); },
  () => { console.log(2); },
  () => { console.log(3); },
  () => { console.log(4); },
]
console.log(funs.reduce((pre, fun) => {
  fun()
}, undefined))

// convert an array to an object
const peopleArr = [{
  username: 'gao',
  email: '12345',
  age: 24,
}, {
  username: 'yao',
  email: '12345',
  age: 23,
}, {
  username: 'li',
  email: null,
  age: 23,
}]
console.log(peopleArr.reduce((acc, person) => {
  return {
    ...acc,
    [person.username]: person,
  }
}, {}));

// unfold a small array to a large array
const fileLines = [
  'Inspector Algar,Inspector Bardle,Mr. Barker,Inspector Barton',
  'Inspector Baynes,Inspector Bradstreet,Inspector Sam Brown',
]
console.log(fileLines.reduce((acc, line) => {
  return acc.concat(line.split(/,/g))
}, []));

// combine mapping and filtering into one pass
function notEmptyEmail(x) {
  return (x.email !== null) && (x.email !== undefined);
}

function getAge(x) {
  return x.age;
}

function greater(a, b) {
  return (a > b) ? a : b;
}

// const peopleWithEmail = peopleArr.filter(notEmptyEmail);
// const ages = peopleWithEmail.map(getAge);
// const older = ages.reduce(greater, '');
function notEmptyMostRecent(currentRecent, person) {
  return (notEmptyEmail(person))
      ? greater(currentRecent, person.age)
      : currentRecent;
}

const older = peopleArr.reduce(notEmptyMostRecent, 0);

console.log(older);

// run asynchronous functions in sequence (very cool example)
// function fetchMessages(username) {
//   return fetch(`https://example.com/api/messages/${username}`)
//       .then(response => response.json());
// }

// function getUsername(person) {
//   return person.username;
// }

// async function chainedFetchMessages(p, username) {
//   // In this function, p is a promise. We wait for it to finish,
//   // then run fetchMessages().
//   const obj  = await p;
//   const data = await fetchMessages(username);
//   return { ...obj, [username]: data};
// }

// const msgObj = peopleArr
//   .map(getUsername)
//   .reduce(chainedFetchMessages, Promise.resolve({}))
//   .then(console.log);