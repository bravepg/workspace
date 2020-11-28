interface IPerson {
  readonly id: number, // 只读属性
  name: string,
  age: number,
  gender?: string, // 可选属性
  // [propName: string]: any, // 任意属性
  // [propName: string]: string, Type 'number' is not assignable to type 'string'
  // 一旦任意属性确定了类型，那么所有属性都必须跟该类型保持一致，age 类型 是number，所以报错
  // 因为一个接口中只能有一个任意类型，因此如果希望有多个属性类型，可以使用联合属性
  [propName: number]: string | number,
}

let tom: IPerson = {
  id: 1,
  name: 'Tom',
  age: 24,
}

// tom.id = 2; // 不可以被修改 Cannot assign to 'id' because it is a read-only property.