// 类型推论
let seven = '7';
// seven = 7; Type 'number' is not assignable to type 'string'.
// 上述代码默认被认为是 string

let myNumber;
myNumber = 'seven';
myNumber = 7;
// 如果刚开始不赋值，则会被推断为 any
