// const Dep = {
//   target: null,
//   dataset: {},
// }
// function makeComputed(data, key, func) {
//   Object.defineProperty(data, key, {
//     get() {
//       if (!Dep.target) {
//         Dep.target = key;
//       }
//       console.log(func)
//       const val = func();
//       Dep.target = null;
//       return val;
//     },
//     set() {
//       console.log('set', key);
//     },
//   });
// }
// function makeReactive(data, key) {
//   Object.defineProperty(data, key, {
//     get() {
//       return data[key]
//     },
//     set() {
//       console.log('set', key);
//     },
//   });
// }
// function observeData(data) {
//   Object.keys(data).forEach(key => {
//     if (typeof data[key] === 'function') {
//       makeComputed(data, key, data[key]);
//     } else {
//       makeReactive(data, key);
//     }
//   });
// }
// const data = {
//   firstName: 'gao',
//   lastName: 'peng',
//   key: 'first',
//   getName() {
//     return this.key;
//     // switch(this.key) {
//     //   case 'first':
//     //     return this.firstName;
//     //   default:
//     //     return this.lastName;
//     // }
//   },
// };
// observeData(data);
// // data.firstName = 'gao1';
// console.log(data.getName);

const MakeObservale = require('./observe');

const data = {
  firstName: 'gao',
  lastName: 'peng',
  key: 'first',
  getName() {
    switch(this.key) {
      case 'first':
        return this.firstName;
      case 'second':
        return this.lastName;
    }
  },
  getNameLength() {
    return this.getName.length;
  },
}
const App = new MakeObservale(data);
const Dep = {
  target: null,
  dataset: {},
  addDeps(deps, key) {
    if (!deps.includes[this.target]) {
      deps.push(this.target);
    }
    if (!this.dataset[this.target]) {
      this.dataset[this.target] = [];
    }
    if (!this.dataset[this.target].includes(key)) {
      this.dataset[this.target].push(key);
    }
  },
  getValidDeps(deps, dep) {
    return deps.filter((key) => this.dataset[key].includes(dep));
  },
};
App.makeComputed = function(data, key, computedFunc) {
  let cache = null;
  // App.observe(key, () => {
  //   console.log(key, '清除缓存');
  //   cache = null;
  // });
  Object.defineProperty(data, key, {
    get() {
      if (!Dep.target) {
        Dep.target = key;
      }
      // if (!cache) {
      //   Dep.dataset[key] = [];
      cache = computedFunc.call(data);
      // }
      Dep.target = null;
      return cache;
    },
    set() {
      // do nothing
    },
  })
}
App.makeReactive = function(data, key) {
  let val = data[key];
  // let deps = [];
  Object.defineProperty(data, key, {
    get: () => {
      // if (Dep.target) {
      //   Dep.addDeps(deps, key);
      // }
      return val;
    },
    set: (newVal) => {
      // val = newVal;
      // deps = Dep.getValidDeps(deps, key);
      // if (deps.length) {
      //   deps.forEach((key) => this.notify(key));
      // }
    },
  });
}
App.observeData = function(data) {
  for (let key in data) {
    if (data.hasOwnProperty(key)) {
      if (typeof data[key] === 'function') {
        this.makeComputed(data, key, data[key]);
      } else {
        this.makeReactive(data, key);
      }
    }
  }
}
App.observeData(App.data);
App.data.key = 'second';
console.log(App.data.getName);
App.data.key = 'first';
console.log(App.data.getName);
App.data.lastName = 'peng1';
