import immutagen from "immutagen";
const gen = immutagen(function*() {
  yield 1;
  yield 2;
  return 3;
})(); // { value: 1, next: [function] }

console.log(gen.next()); // { value: 2, next: [function] }
console.log(gen.next()); // { value: 2, next: [function] }

console.log(gen.next().next()); // { value: 3, next: undefined }