function greeter() {
  return (target: any) => {
    console.log('Hello', target.name);
  };
}

@greeter()
export class Demo {
  // todo
  public x = 1;
}

function formatStr(s: any) {
  return s.toUppercase();
}

// 匿名函数的参数可以不声明类型
const names = ["Alice"];
names.forEach((s) => {
  s.toUpperCase();
});
