// 函数声明（声明输入输出）
function sum1(x: number, y: number): number {
  return x + y;
}


// 函数表达式
let sum2 = function(x: number, y: number): number {
  return x + y;
}
// 完整结构（与箭头函数区分开）
let sum3: (x: number, y: number) => number = function(x: number, y: number) {
  return x + y;
}

// 箭头函数
let sum4 = (x: number, y: number) => x + y;

// =======================
// 用接口定义函数的形状
interface ISearchFunc {
  (source: string, sub: string): boolean,
}
let mySearch: ISearchFunc = function(source: string, sub: string): boolean {
  return source.search(sub) !== -1;
}




// 可选参数（与可选属性定义的方式类似，可选参数后面不允许出现必选参数
function buildName(firstName: string, lastName?: string): string {
  return firstName + lastName;
}
// 设置参数默认值，就不必使用可选参数以及遵循上面的条件了
function buildName1(lastName: string = '', firstName: string): string {
  return firstName + lastName;
}
// 剩余参数，使用数组自定义

// 重载
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string {
  return x;
}