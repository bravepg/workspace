function capitalizeFirstLetter(str: string) {
  return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
}

function observableWrapper(): PropertyDecorator {
  return (target: any, key: string) => {
    const targetKey = `on${capitalizeFirstLetter(key)}Change`;
    console.log('arguments', target, key);

    target[targetKey] = function(fn: (prev: any, next: any) => void) {
      let prev = this[key];
      Reflect.defineProperty(this, key, {
        set(next) {
          fn(prev, next);
          prev = next;
        }
      });
    }
  }
}

function observableWrapper2(): PropertyDecorator {
  return (target: any, key: string) => {
    const targetKey = `on${capitalizeFirstLetter(key)}2Change`;
    console.log('arguments', target, key);

    target[targetKey] = function(fn: (prev: any, next: any) => void) {
      let prev = this[key];
      Reflect.defineProperty(this, key, {
        set(next) {
          fn(prev, next);
          prev = next;
        }
      });
    }
  }
}

class PropertyC {
  @observableWrapper()
  static foo = 'staticfoo'
  @observableWrapper()
  @observableWrapper2()
  foo = -1;

  @observableWrapper()
  bar = 'bar';
}

const propertyC = new PropertyC() as any;
console.log('propertyC', PropertyC.prototype, PropertyC);

propertyC.onFooChange((prev: any, next: any) => console.log(`prev: ${prev}, next: ${next}`))
propertyC.onBarChange((prev: any, next: any) => console.log(`prev: ${prev}, next: ${next}`))

propertyC.foo = 100; // -> prev: -1, next: 100
propertyC.foo = -3.14; // -> prev: 100, next: -3.14
propertyC.bar = "baz"; // -> prev: bar, next: baz
propertyC.bar = "sing"; // -> prev: baz, next: sing