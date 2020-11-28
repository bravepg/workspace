// 布尔值
let isDone: boolean = false;
// let createdByNewBoolean: boolean = new Boolean(1); // 编译失败，new Boolean return object
let createdByNewBoolean: Boolean = new Boolean(1);

// 数值
let num: number = 0;
// let createNum: number = new Number(0); // 编译失败，new Number return object
let createNum: Number = new Number(0);

// 字符串
let str: string = '1';
// let createStr: string = new String('1'); // 编译失败，new String return object
let createStr: String = new String('1');

// 空值（void 表示没有任何返回值的函数）
function alertName(): void {
}
const alertName2 = (): void => {}

// null 和 undefined
// 声明 void 类型的变量没什么用，只能赋值为 undefined 和 null
let v: void = undefined;
let u: undefined = undefined;

let num2: number = undefined;
let num3: number = u;