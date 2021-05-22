function logger(target: any, propKey: string, descriptor: PropertyDescriptor) {
  console.log('target', target, propKey, descriptor);
  const original = descriptor.value;

  descriptor.value = function(...args: any) {
    console.log('params: ', ...args);
    const result = original.call(this, ...args);
    console.log('result: ', result);
    return result;
  }
}

class MethodC {
  number?: number;
  constructor(value: number) {
    this.number = value;
  }
  @logger
  add(x: number, y:number ) {
    return x + y;
  }
}

const methodC = new MethodC(3);
methodC.add(1, 2);