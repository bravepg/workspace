class Dictionary {
  constructor() {
    this.datasource = new Array();
  }
  add(key, value) {
    this.datasource[key] = value;
  }
  find(key) {
    return this.datasource[key];
  }
  remove(key) {
    delete this.datasource[key];
  }
  showAll() {
    for (let key of Object.keys(this.datasource).sort()) {
      console.log(`${key} ----> ${this.datasource[key]}`);
    }
  }
  count() {
    let n = 0;
    for (let key of Object.keys(this.datasource)) {
      ++n;
    }
    return n;
  }
  clear() {
    for (let key of Object.keys(this.datasource)) {
      delete this.datasource[key];
    }
  }
}
module.exports = Dictionary;
