// a String Enum
enum MyKeyType {
  Sun = 7,
  Mon,
  Tue,
  BAR,
  BAZ = <any>'baz', // 手动赋值
}

// a literal type
type TMyKeyType = 'foo' | 'bar' | 'baz';

// 两者的不同 
// https://stackoverflow.com/questions/49761972/difference-between-string-enums-and-string-literal-types-in-ts
// 简单地说就是，使用 String Enum 可以更加语义化，不需要知道 value 具体的值是什么
