function capitalizeFirstLetter(str: string) {
  return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
}

function observable(target: any, key: string): any {
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

class PropertyC {
  @observable
  foo = -1;

  @observable
  bar = 'bar';
}

const propertyC = new PropertyC();
console.log('propertyC', propertyC);

// propertyC.onFooChange((prev: any, next: any) => console.log(`prev: ${prev}, next: ${next}`))
// propertyC.onBarChange((prev: any, next: any) => console.log(`prev: ${prev}, next: ${next}`))

// propertyC.foo = 100; // -> prev: -1, next: 100
// propertyC.foo = -3.14; // -> prev: 100, next: -3.14
// propertyC.bar = "baz"; // -> prev: bar, next: baz
// propertyC.bar = "sing"; // -> prev: baz, next: sing