class MakeObservale {
  constructor(data) {
    // plain object
    this.data = data || {
      name: 'gao',
      age: 20,
      friends: [],
    }
    this.signals = {};
  }
  // transform plain object's properties into observable properties
  makeObservale(obj, key) {
    let val = obj[key];
    Object.defineProperty(obj, key, {
      get: () => {
        return val;
      },
      set: (newval) => {
        val = newval;
        this.notify(key);
      },
    })
  }
  observeData(data) {
    for (let key in data) {
      if (data.hasOwnProperty(key)) {
        this.makeObservale(data, key);
      }
    }
  }
  observe(key, callback) {
    if (!this.signals[key]) this.signals[key] = [];
    this.signals[key].push(callback);
  }
  notify(key) {
    if (this.signals[key] && this.signals[key].length > 0) {
      this.signals[key].forEach((callback) => {
        callback();
      });
    }
  }
}

module.exports = MakeObservale;


// const App = new MakeObservale({ name: 'gao' });
// App.observeData(App.data);
// App.observe('name', () => { console.log('name changed') });
// App.data.name = 'yao';