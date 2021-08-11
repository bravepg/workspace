import 'reflect-metadata';

function validate1(target: any, key: string, descriptor: PropertyDescriptor) {
  const originalFn = descriptor.value;

  console.log('target', target, key);
  const designParamTypes = Reflect.getMetadata('design:paramtypes', target, key);

  descriptor.value = function(...args: any[]) {
    args.forEach((arg, index) => {
      const paramType = designParamTypes[index];
      console.log('designParamTypes', designParamTypes, paramType.toString());
      
      const result = arg.constructor === paramType || arg instanceof paramType;

      if (!result) {
        throw new Error(
          `Failed for validating parameter: ${arg} of the index: ${index}`
        );
      }
    });

    return originalFn.call(this, ...args);
  }
}

class MetaData {
  @validate1
  sayRepeat(word: string, x: number) {
    return Array(x).fill(word).join(' ');
  }
}

new MetaData().sayRepeat('hello', 1);