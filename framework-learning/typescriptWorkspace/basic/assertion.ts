/**
 * 类型断言可以用来手动指定一个值的类型
 * 
 * 语法
 *  值 as 类型
 * 或者
 *  <类型> 值
 */

/**
 * 将一个联合类型断言为其中一个类型
 */
interface ICat {
  name: string,
  run(): void,
}

interface IFish {
  name: string,
  swim(): void,
}
function swim(animal: ICat | IFish) {
  if (typeof (animal as IFish).swim === 'function') {

  }
}

/**
 * 将一个父类断言为更加具体的子类
 */
interface ApiError extends Error {
  code: number;
}

class HttpError extends Error {
  statusCode: number = 0;
}

function isApiError(error: Error): boolean {
  if (typeof (error as ApiError).code === 'number') {

  }
  // 当 ApiError 为 interface 而不是 class 时
  // 使用 instanceof 会报错
  // if (error instanceof ApiError) {
  //   return true;
  // }
  return false;
}

/**
 * 将任何一个类型断言为 any
 * 有时候我们非常确定一段代码不会报错
 * 需要将其断言为 any
 * 
 * 要在严格性和开发便利性之间掌握平衡
 */
(window as any).foo = 1;

/**
 * 将 any 断言为一个具体类型
 * 将历史遗留 any 编程具体类型
 */
function getCacheData(key: string): any {
  return (window as any).cache[key];
}
interface Cat {
  name: string;
  run(): void;
}

const tom2 = getCacheData('tom') as Cat;


/**
 * 断言类型的限制
 * 如果 A 兼容 B，那么 A 可以断言 B，B也可以断言 A
 * 
 * 在下面的代码中，可以认为 IAnimal 是 IDog 的父类，在面向对象中
 * 可以将子类型的实例赋值给父类型的变量：Animal animal = new Dog();
 * 也可以将父类型的实例赋值给子类型的变量，必须通过向下转型 Dog dog = (Dog) new Animal();
 * 
 * 在 TypeScript 中，可以叫做 A 兼容 B，他们就可以进行相互断言
 */
interface IAnimal {
  name: string,
}
interface IDog {
  name: string,
  run(): void,
}

let dog: IDog = {
  name: 'dog',
  run: () => {},
}

let animal: IAnimal = dog;

function testAnimal(animal: IAnimal) {
  return animal as IDog;
}

function testDog(dog: IDog) {
  return dog as IAnimal;
}

/**
 * 类型断言 VS 类型转换
 * 
 * 类型断言只会影响 Typescript 编译时的类型，类型断言语句在编译结果中会删除
 * 
 * 所以类型断言不是类型转换，它不会真的影响到变量的类型
 */

/**
 * 类型断言 VS 类型声明
 */
const animal1: IAnimal = {
  name: 'tom',
};
const dog1: IDog = {
  name: 'tom',
  run() {},
};
const tom1 = animal1 as IDog;

// const tom3: IDog = animal1; // 'run' is missing in type 'IAnimal' but required in type 'IDog'.
// const tom4: IAnimal = dog1;
// tom3 展示出 不能直接将父类的实例赋值给子类的变量（Java 中是通过向下转型兼容的）
// tom4 展示出 可以直接将子类的实例赋值给父类的变量（Java 中会发生自动向上转型）

// 深入来讲
// animal 断言为 IDog，只需要满足 IAnimal 兼容 IDog 或者 IDog 兼容 Animal 即可
// aniaml 赋值给 tom，需要满足 IDog 兼容 IAnimal 才行
