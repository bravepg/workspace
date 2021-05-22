import "reflect-metadata";

// ioc 容器
let classPool: Array<Function> = [];

// 注册该类进入容器
export function Injectable() {
  return (_constructor: Function) => {
    let paramTypes:Array<Function> = Reflect.getMetadata('design:paramtypes', _constructor);
    console.log('paramTypes', _constructor, paramTypes);

    // 已注册
    if (classPool.indexOf(_constructor) !== -1) {
      return;
    }

    for(let val of paramTypes) {
      if (val === _constructor) {
        throw new Error('不能依赖自己');
      } else if (classPool.indexOf(val) === -1){
        throw new Error(`${val}没有被注册`);
      }
    }

    classPool.push(_constructor);
  }
}

// 实例化工程
export function classFactory<T>(_constructor: { new (...args: Array<any>): T }): T {
  let paramTypes:Array<Function> = Reflect.getMetadata('design:paramtypes', _constructor);
  // 参数实例化
  let paramInstance = paramTypes.map((val: Function) => {
    console.log('val', val, val.length);
    if (classPool.indexOf(val) === -1) {
      throw new Error(`${val}没有被注册`);
    } else if (val.length) {
      // 参数还有依赖
      return classFactory(val as any);
    } else {
      // 没有依赖直接创建实例
      return new (val as any)();
    }
  });

  return new _constructor(...paramInstance);
}