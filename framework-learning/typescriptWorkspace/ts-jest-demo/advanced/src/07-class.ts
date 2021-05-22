class ClassGreeter {
  //  assignment assertion operator
  name!: string;

  readonly rName: string = 'world';

  // overload
  constructor(s: string);
  constructor(otherName?: string) {
    if (otherName !== undefined) {
      this.rName = otherName;
    }
  }
}

const g = new ClassGreeter('hello');
console.log(g.rName);

interface ClassCheckable {
  y?: number;
  check(name: string): boolean;
}

class ClassNameChecker implements ClassCheckable {
  check(s: any) {
    // Parameter 's' implicitly has an 'any' type.
    // Notice no error here
    return s.toLowercse() === "ok";
  }
}
// Property 'y' does not exist on type 'ClassNameChecker'.
// new ClassNameChecker().y

class ClassBase {
  static staticName = 'static';
  private privateName = 'privte';
  private privateName2 = 'privte2';
  
  private sum() {
    return this.privateName + this.privateName2;
  }
  name = 'base';
  protected m = 10;
  constructor() {
    console.log("My name is " + this.name, this.privateName, this.privateName2);
  }
  getName(this: ClassBase) {
    return this.name + this.sum();
  };
}

class ClassDerived extends ClassBase {
  name = "derived";
  public m = 15;
  constructor() {
    super();
  }
  getName2() {
    super.getName();
  }
}

const classDerived = new ClassDerived();
// const getName = classDerived.getName;
console.log(classDerived.m, classDerived.getName());

class ClassMsgError extends Error {
  constructor(m: string) {
    super(m);

    Object.setPrototypeOf(this, ClassMsgError.prototype);
  }
  sayHello() {
    return "hello " + this.message;
  }
}
const classMsgError = new ClassMsgError('world');
// console.log(classMsgError.sayHello());


class ClassBox<Type> {
  contents: Type;
  // can’t have type parameters
  constructor(value: Type) {
    this.contents = value;
  }
}

const b = new ClassBox("hello!");