interface PaintOptions {
  shape: Shape;
  xPos?: number;
  yPos?: number;
}

function draw({ shape, xPos = 0, yPos = 0 }: PaintOptions) {
  console.log(shape, xPos, yPos);
}

function draw1({ shape: Shape, xPos = 0, yPos = 0 }: PaintOptions) {
  // Cannot find name 'shape'. Did you mean 'Shape'?
  // 注意结构赋值的语法
  // console.log(shape, xPos, yPos);
}

interface SomeType {
  readonly prop: string;
}

function doReadOnlySomething(obj: SomeType) {
  // We can read from 'obj.prop'.
  console.log(`prop has the value '${obj.prop}'.`);

  // But we can't re-assign it.
  // obj.prop = "hello";
}

interface Person {
  name: string;
  age: number;
}

interface ReadonlyPerson {
  readonly name: string;
  readonly age: number;
}

let writablePerson: Person = {
  name: "Person McPersonface",
  age: 42,
};

// works
let readonlyPerson: ReadonlyPerson = writablePerson;
console.log(readonlyPerson.age); // prints '42'
writablePerson.age++;
console.log(readonlyPerson.age); // prints '43'


interface ObjectColorful {
  color: string;
}
interface ObjectCircle {
  radius: number;
}
interface ObjectColorfulCircle extends ObjectColorful, ObjectCircle {

}
const cc: ObjectColorfulCircle = {
  color: "red",
  radius: 42,
};
type ColorfulCircleType = ObjectColorful & ObjectCircle;

interface Box<T> {
  contents: T;
}

function setContent<T>(box: Box<T>, newContent: T) {
  box.contents = newContent;
}

function ObjectDoSomething(value: ReadonlyArray<string>) {

  // ...

}

let myArray: readonly string[] = ["hello", "world"];