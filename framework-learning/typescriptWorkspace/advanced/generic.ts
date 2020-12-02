function createArray<T>(length: number, value: T): Array<T> {
  const result: T[] = [];
  for (let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result;
}
createArray<string>(3, 'x');
// createArray(3, 'x'); // 也可以使用类型推论自动推算出来

// 定义多类型参数
function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]];
}

// 泛型约束（对应泛型上限和泛型下限）
function logger<T>(arg: T): T {
  // console.log(arg.length); // 由于不知道 arg 的类型，因此直接调用属性可能会报错
  return arg;
}
interface ILengthwise {
  length: number;
}
// 可以使 T 是具有 length 属性的子类型即可，确定了泛型上限
function loggerLimit<T extends ILengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}
// 多个类型参数的约束
function copyFields<T extends U, U>(target: T, source: U): T {
  for (let id in source) {
    target[id] = (<T>source)[id];
  }

  return target;
}
