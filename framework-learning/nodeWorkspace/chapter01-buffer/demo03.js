const typearray = new Uint16Array(2);
const buff = Buffer.from([1, 2, 3]);
console.log(Buffer.isBuffer(typearray));
console.log(Buffer.isBuffer(buff));
console.log(Buffer.poolSize);

const str = 'Node.js';
const buf = Buffer.allocUnsafe(str.length);

for (let i = 0; i < str.length; i++) {
	buf[i] = str.charCodeAt(i);
}

console.log(buf);
console.log(buf.toString('ascii'));


// 拷贝buffer
const buf1 = Buffer.allocUnsafe(26);
const buf2 = Buffer.allocUnsafe(26).fill('!');

for (let i = 0; i < 26; i++) {
	buf1[i] = i + 97;
}

buf1.copy(buf2, 8, 16, 20);

console.log(buf2.toString('ascii', 0, 25));