function logger(target: any, propKey: string, descriptor: PropertyDescriptor) {
  console.log('target', target, propKey, descriptor);
  const original = descriptor.value;

  descriptor.value = function(...args: any) {
    console.log('params: ', ...args);
    const result = original.call(this, ...args);
    console.log('result3: ', result);
    return result;
  }
}

function logger2(target: any, propKey: string, descriptor: PropertyDescriptor) {
  console.log('target2', target, propKey, descriptor);
  const original = descriptor.value;

  descriptor.value = function(...args: any) {
    console.log('params2: ', ...args);
    const result = original.call(this, ...args);
    console.log('result2: ', result);
    return result;
  }
}

class MethodC {
  number?: number;
  constructor(value: number) {
    this.number = value;
  }
  // 洋葱圈模型
  // 入参包括 prototype key keyDescriptor
  @logger
  @logger2
  add(x: number, y:number ) {
    return x + y;
  }
}

const methodC = new MethodC(3);
methodC.add(1, 2);
methodC.add(1, 3);