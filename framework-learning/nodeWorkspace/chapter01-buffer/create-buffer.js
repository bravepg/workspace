// TypedArray 视图
const arr = new Uint16Array(2);

arr[0] = 5000;
arr[1] = 4000;

console.log(arr);

// 拷贝 `arr` 的内容
const buf1 = Buffer.from(arr);

// 与 `arr` 共享内存
const buf2 = Buffer.from(arr.buffer);

console.log(arr.buffer)
console.log(buf1);   // <Buffer 88 a0>
console.log(buf2);   // <Buffer 88 13 a0 0f> (8*16 + 8) + (1*16 + 3) * 256 = 5000    10 * 16 + 15 * 256 = 4000
 
arr[1] = 6000;
console.log(buf1);  // <Buffer 88 a0>
console.log(buf2);  // <Buffer 88 13 70 17> (7 * 16 + 0) + (1 * 16 + 7) * 256 = 6000

console.log(buf2.buffer)
console.log(buf2.poolSize)