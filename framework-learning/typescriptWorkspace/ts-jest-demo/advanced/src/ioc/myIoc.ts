import 'reflect-metadata';

const classPool: Array<Function> = [];

export const Injectable = () => {
  return function(_constructor: Function) {

    // 如果当前类已经注册
    if (classPool.indexOf(_constructor) !== -1) {
      return;
    }

    const designTypes:Array<Function> = Reflect.getMetadata('design:paramtypes', _constructor);

    console.log('designTypes', designTypes);

    for (let val of designTypes) {
      if (val === _constructor) {
        throw new Error('自己不能依赖自己');
      }
      if (classPool.indexOf(val) === -1) {
        throw new Error('该类尚未被注册');
      }
    }

    classPool.push(_constructor);
  }
}

export function classFactory<T>(_constructor: { new (...args: Array<any>): T }): T {
  const designTypes:Array<Function> = Reflect.getMetadata('design:paramtypes', _constructor);

  console.log(designTypes);
  const params = designTypes.map((val) => {
    console.log('val', val, val.length);
    // 直接通过函数参数的长度判断
    if (val.length) {
      // 参数还有依赖
      return classFactory(val as any);
    } else {
      // 没有依赖直接创建实例
      return new (val as any)();
    }
  })

  return new _constructor(...params);
}