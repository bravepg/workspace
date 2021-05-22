type GreetFunction = (a: string) => void;
function greeter(fn: GreetFunction) {
  fn('Hello');
}

function printToConsole(s: string) {
  console.log(s);
}

greeter(printToConsole);

type DescribleFunction = {
  description: string;
  (someArg: number): boolean;
}

function doSomething(fn: DescribleFunction) {
  console.log(fn.description + " returned " + fn(6));
}

function firstElement<Type>(arr: Type[]): Type {
  return arr[0];
}
// Type 'number' is not assignable to type 'String'
// firstElement<string>(["a", "b", 1]);

function map<Input, Output>(arr: Input[], func: (arg: Input) => Output): Output[] {
  return arr.map(func);
}
map<string, number>(["1", "2", "3"], (n) => parseInt(n));

function longest<T extends { length: number }>(a: T, b:T) {
  if (a.length >= b.length) {
    return a;
  } else {
    return b;
  }
}
// Error! Numbers don't have a 'length' property
// const notOK = longest(10, 100);

// function minimumLength<T extends { length: number }>(
//   obj: T,
//   minimum: number
// ): T {
//   if (obj.length >= minimum) {
//     return obj;
//   } else {
//     return { length: minimum }; 
//   }
// }

function fn(x: string): void;
function fn(x?: string): void {
  console.log(x?.length);
}
// Expected 1 arguments, but got 0.
// fn()

// function len(s: string): number;
// function len(arr: any[]): number;
function len(x: any[] | string): number {
  return x.length;
}
len(""); // OK
len([0]); // OK
len(Math.random() > 0.5 ? "hello" : [0]);


const user = {
  id: 123,

  admin: false,
  becomeAdmin: function () {
    this.admin = true;
  },
};


function multiply(n: number, ...m: number[]) {
  return m.map((x) => n * x);
}
// 'a' gets value [10, 20, 30, 40]
const a = multiply(10, 1, 2, 3, 4);

// Same as prior example
type ABC = { a: number; b: number; c: number };
function sum({ a, b, c }: ABC) {
  console.log(a + b + c);
}