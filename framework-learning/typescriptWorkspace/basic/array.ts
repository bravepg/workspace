// 类型 + 括号表示法
let fibonacci: number[] = [1, 1, 2, 3, 5];
// fibonacci = ['1']; // 不允许出现其他类型 Type 'string' is not assignable to type 'number'.

// =========================
// 数组泛型
let fibonacci2: Array<number> = [1, 1, 2, 3, 5];


// =========================
// 用接口表示数组
interface INumberArray {
  [index: number]: number,
}
// INumberArray 表示只要索引的类型是数字，那么值的类型也必须是数字
// 也就是说，如果索引的类型是非数字，那么就不进行检测
let fibonacc3: INumberArray = [1, 1, 2, 3, 5];


// =========================
// 上述接口表示数组的方法太麻烦，一般不使用，但是类数组会使用
function sum() {
  // let args: number[] = arguments; Type 'IArguments' is missing the following properties from type 'number[]'
  let args: IArguments = arguments;

  // IArguments 是内置接口
  interface IArguments {
    [index: number]: string;
    length: number;
    callee: Function;
  }
}

// ==================
// any 在数组中的使用
const list: Array<any> = [{}, 2];
const list2: any[] = [{}, 2];