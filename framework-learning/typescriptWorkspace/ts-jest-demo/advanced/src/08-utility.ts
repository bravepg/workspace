interface UtilityTodo {
  title: string;
  description: string;
}

type MyPartial<T> = {
  [P in keyof T]?: T[P] | undefined;
}

function updateTodo(todo: UtilityTodo, fieldsToUpdate: MyPartial<UtilityTodo>) {
  return {
    ...todo,
    ...fieldsToUpdate,
  }
}

const todo1 = {
  title: "organize desk",
  description: "clear clutter",
}

const todo2 = updateTodo(todo1, {
  description: "throw out trash",
});

console.log('todo2', todo2);

type MyExclude<T, U> = T extends U ? never : T;
type MyExtract<T, U> = T extends U ? T : never;
type MyNonNullable<T> = T extends null | undefined ? never : T;
type MyOmit<T, K extends string | number | symbol> = {
  [P in MyExclude<keyof T, K>] : T[P];
}

const todo3: Omit<UtilityTodo, "description"> = {
  title: 'omit'
}

type MyReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : never;

declare function utilityF1(): { a: number; b: string };
type utilityF2 = typeof utilityF1;
const f3: utilityF2 = () => {
  return {
    a: 1,
    b: '1'
  };
}

console.log(typeof utilityF1);