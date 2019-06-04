const funs = [
  () => { console.log(1); },
  () => { console.log(2); },
  () => { console.log(3); },
  () => { console.log(4); },
]
console.log(funs.reduce((pre, fun) => {
  fun()
}, undefined))