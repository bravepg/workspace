// 表示取值可以为多种类型中的一种
let myFavoriteNumber: string | number;

myFavoriteNumber = 'seven';
myFavoriteNumber = 7;

// myFavoriteNumber = true; Type 'boolean' is not assignable to type 'string | number'

// 当不确定一个联合类型的变量是哪个类型的时候，只能访问联合类型的共有属性和方法
function getLength(something: string | number): number {
  // return something.length; Property 'length' does not exist on type 'number'.
  return 0;
}