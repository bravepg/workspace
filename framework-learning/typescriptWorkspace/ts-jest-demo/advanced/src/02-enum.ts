// 数字枚举
enum NumberDirection {
  Up = 1,
  Down,
  Left,
  Right
}

// 字符串枚举的每个成员必须使用字符串字面量或者另外一个字符串枚举成员进行初始化
enum StringDirection {
  UpNum,
  Up = 'Up', // 第一个定义字符串之后，都需要定义字符串
  Down = 'Down',
  Left = 'Left',
  Right = 'Right'
}

function getSomeValue () {
  return 2;
}

// 异构枚举
enum StringNumberEnum {
  No = 'false',
  Yes = 1,
  // Init = getSomeValue(), // 后续值必须显示初始化
}

// 每个成员都具有一个值，可以是常量或者被计算出来
enum E1 {
  X
};
enum E2 {
  A = 3,
  B
};
const VALUE: string = 'ENUM_VALUE';
enum FileAccess {
  // const members
  None,
  Read = 1 << 1,
  Write = 1 << 2,
  ReadWrite  = Read | Write,
  A = E2.B,
  No = StringNumberEnum.No,
  
  // computed member
  G = "123".length
  // Only numeric enums can have computed members
  // VALUE: VALUE
}

const enum ConstNumberDirection {
  Up,
  Down,
  Left,
  // 无法使用 computed member
  // Right = "123".length
}

declare enum DeclareEnum {
  A = 1,
  B,
  C = 2
}

console.log(E1.X, E2.B, DeclareEnum.A); // 0
