type Constructor = {
  new (...args: any[]): any
};

function ClasstoString<T extends Constructor>(BaseClass: T) {
  console.log('未调用 class C 也会执行');

  // 如果没有定义 return，则会使用 BaseClass
  return class extends BaseClass {
    public num = 23;
    toString() {
      return `${JSON.stringify(this)}---demo`;
    }
  }
}

class Base {
  foo1: number;
}

// declare function ClasstoString<T>(BaseClass: T): T & {
//   foo1: number;
// };

// 很有意思
// 1. 如果只写函数名称 ClasstoString，那么函数定义必须按照规范来，即 function ClasstoString<T extends Constructor>(BaseClass: T)
// 2. 但是一旦通过调用的方式 ClasstoString()，书写方式便变得非常自由
@ClasstoString
class C extends Base {
  public foo = "foo";
  public num = 24;
}

console.log(new C().foo1);