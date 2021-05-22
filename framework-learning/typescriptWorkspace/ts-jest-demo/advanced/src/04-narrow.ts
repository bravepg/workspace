function paddingLeft(padding: number | string, input: string): string {
  if (typeof padding === 'number') {
    return new Array(padding + 1).join(" ") + input;
  }
  // type guard，the padding type is string
  return padding + input;
}

function printAll(strs: string | string[] | null) {
  if (strs && typeof strs === 'object') {
    // null can be object
    for (const s of strs) {
      console.log(s);
    }
    return;
  }
  console.log(strs);
}

let x = Math.random() < 0.5 ? 10 : "hello world!"; // let x: string | number

// interface Shape {
//   kind: "circle" | "square";
//   radius?: number;
//   sideLength?: number;
// }

// function handleShape(shape: Shape) {
//   if (shape.kind === "circle") {
//     // strictNullChecks Object is possibly 'undefined'
//     return Math.PI * shape.radius! ** 2;
//   }
// }

// Non-null Assertion 不够安全
interface Circle {
  kind: "circle";
  radius: number;
}
interface Square {
  kind: "square";
  sideLength: number;
}
interface Triangle {
  kind: "triangle";
  sideLength: number;
}
type Shape = Circle | Square | Triangle;


function handleShape(shape: Shape) {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
  } else if (shape.kind === 'square') {
    return shape.sideLength ** 2;
  } else {
    // Type 'Triangle' is not assignable to type 'never'
    // const _exhaustiveCheck: never = shape;
    // const neverA: number = _exhaustiveCheck;
    // return _exhaustiveCheck;
  }
}

interface Fish {
  swim: () => void;
}

interface Bird {
  fly: () => void;
}

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}
const pet = {} as Bird;
if (isFish(pet)) {
  pet.swim();
} else {
  pet.fly();
}