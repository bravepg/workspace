type Name = string;
type NameResolver = () => string;

type NameOrNameResolver = Name | NameResolver;

function getName(n: NameOrNameResolver): Name {
  return `${n}`;
}

// interface 和 type 的异同

// 1. 都可以描述一个对象或者函数
interface IUser {
  name: string;
  age: number;
}
interface ISetUser {
  (name: string, age: number): void;
}

type TUser = {
  name: string,
  age: number,
}
type TSetUser = (name: string, age: number) => void;
// 2. interface 可以 extends，而 type 只能 intersection
// 2.1. interface extends interface
interface IAnimal2 {
  name: string;
};
interface IDog2 extends IAnimal2 {
  age: number;
}
// 2.2. type intersection
type TAnimal = {
  name: string;
}
type TDog = TAnimal & {
  age: number;
};
// 2.3 interface extends type
interface ICat extends TAnimal {
  age: number;
}
// 2.4 type intersection
type TCat = IAnimal2 & {
  age: number;
}

// =========================
// type 可以声明基本类型别名，联合类型，元组等类型，interface 不行
type TPet = IDog2 | ICat;
type TpetList = [IDog2, ICat];

// interface 可以声明合并，type 不行
interface IAnimal2 {
  gender: string,
}
/**
 * IAnimal2 接口为 {
 *   name: string
 *   age: number
 *   sex: string
 * }
 */

// 在网上看到这样一个问题 https://github.com/SunshowerC/blog/issues/7#issuecomment-583828341
interface StringMap {
  [key: string]: string;
}
interface A {
  key?: string;
}
type B = {
  key?: string;
};
const a: A = { key: "1" };
const b: B = { key: "1" };
const c: StringMap = b;
// const d: StringMap = a; // Type 'A' is not assignable to type 'StringMap'
// 因为 interface 是一个实际存在的接口，并且 StringMap 不兼容 A
// 如果这样改写则是校验通过的
const s: StringMap = { key: "1" };
// const d: A = s; // 因为 A 可以兼容 StringMap
const d: StringMap = a as StringMap; // 因为使用了断言
