import 'reflect-metadata';

function validate(target: any, key: string, descriptor: PropertyDescriptor) {
  const originalFn = descriptor.value;

  console.log('target', target, key);
  const designParamTypes = Reflect.getMetadata('design:paramtypes', target, key);

  descriptor.value = function(...args: any[]) {
    args.forEach((arg, index) => {
      console.log('designParamTypes', designParamTypes);
      const paramType = designParamTypes[index];
      
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
  @validate
  sayRepeat(word: string, x: number) {
    return Array(x).fill(word).join(' ');
  }
}

new MetaData().sayRepeat('hello', '' as any);