function simpleDecorator(key: string): any {
  console.log("evaluate: ", key);
  return function () {
    console.log("call: ", key);
  };
}

@simpleDecorator('Class Decorator')
class A {
  @simpleDecorator('Static property')
  static prop?: number;
  
  @simpleDecorator('Static Method')
  static method(@simpleDecorator('Static Method Parameter') foo: any) {}

  constructor(@simpleDecorator('Constructor Parameter') foo: any) {}

  @simpleDecorator('Instance Method')
  method(@simpleDecorator('Instance Method Parameter') foo: any) {}

  @simpleDecorator('Instance Property')
  prop?: number;
}