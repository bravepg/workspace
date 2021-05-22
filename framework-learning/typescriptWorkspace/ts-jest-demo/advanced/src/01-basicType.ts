// 布尔值
let isDone: boolean = false;
// 数字
let num: number = 0;

// 字符串
let str: string = '';

// 数组
let list1: number[] = [1, 2, 3]; // 元素类型后面接上 []
let list2: Array<number> = [1, 2, 3]; // 数组泛型

// 元组 Tuple（已知元素数量和类型的数组） todo
let tuple: [string, number] = ['', 2];

// 枚举
enum Color {Red = 1, Green};
// let c: Color = Color.Red;
let c: string = Color[1];
console.log('c', c, Color.Red);

// ============================================

// any、void、Null、Undefined、Never
// 1. any 会跳过编译器检查，跟 Object 不一致
let notSure: any = 4;
notSure.ifItExists();

let prettySure: Object = 4;
// prettySure.ifItExists(); // 编译会报错
// 2. void 与 any 相反，表示没有任何类型，并且只能为 void 变量的类型赋予 undefined 和 null
// 3. null 和 undefined 是所有类型的子类型，也就是说可以把这两种类型赋值给 number 类型的变量
// let numIsNull: number = null;
// 4. 修改 strictNullChecks 配置，保证 null 和 undefined 只能赋值给 void 和 他们自己
let nullIsNull: null = null;
let voidIsNull: void = undefined;
// 5. never 类型表示的是永不存在的值的类型，never 类型是那些总是会抛出异常或者根本不会有返回值的
// 函数表达式的返回值类型；变量也可能是 never 类型，当它们被永不为真的类型所保护
// 返回 never 的函数必须要存在无法到达的终点
function error(message: string): never {
  throw new Error(message);
}
// 6. never 是任何类型的子类型，可以赋值给任何类型
// let varNever: never;
// let numIsNever: number = varNever;

declare function create(o: object | null): void;
create([]);
create(function(){});
create({});
create(null);
