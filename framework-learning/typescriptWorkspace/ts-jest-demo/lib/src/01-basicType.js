// 布尔值
var isDone = false;
// 数字
var num = 0;
// 字符串
var str = '';
// 数组
var list1 = [1, 2, 3]; // 元素类型后面接上 []
var list2 = [1, 2, 3]; // 数组泛型
// 元组 Tuple（已知元素数量和类型的数组） todo
var tuple = ['', 2];
// 枚举
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
})(Color || (Color = {}));
;
// let c: Color = Color.Red;
var c = Color[1];
console.log('c', c, Color.Red);
// ============================================
// any、void、Null、Undefined、Never
// 1. any 会跳过编译器检查，跟 Object 不一致
var notSure = 4;
notSure.ifItExists();
var prettySure = 4;
// prettySure.ifItExists(); // 编译会报错
// 2. void 与 any 相反，表示没有任何类型，并且只能为 void 变量的类型赋予 undefined 和 null
// 3. null 和 undefined 是所有类型的子类型，也就是说可以把这两种类型赋值给 number 类型的变量
// let numIsNull: number = null;
// 4. 修改 strictNullChecks 配置，保证 null 和 undefined 只能赋值给 void 和 他们自己
var nullIsNull = null;
var voidIsNull = undefined;
// 5. never 类型表示的是永不存在的值的类型，never 类型是那些总是会抛出异常或者根本不会有返回值的
// 函数表达式的返回值类型；变量也可能是 never 类型，当它们被永不为真的类型所保护
// 返回 never 的函数必须要存在无法到达的终点
function error(message) {
    throw new Error(message);
}
create([]);
create(function () { });
create({});
create(null);
