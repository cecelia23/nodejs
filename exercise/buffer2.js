const buf1 = Buffer.from('This is a test!');
console.log(buf1.length);
// 以分配的大小为准
const buf2 = Buffer.allocUnsafe(10);
buf2[0] = 10;
console.log(buf2.length);

console.log(buf1.toString());

const  buf3 = Buffer.allocUnsafe(10);
buf3.fill('c',3,8);
console.log(buf3);

const buf4 = Buffer.from('test');
const buf5 = Buffer.from('test');
const buf6 = Buffer.from('test!');

// 比较内容是否相同，而不是比较是否是同一块内存
console.log(buf4.equals(buf5));
console.log(buf4.equals(buf6));

console.log(buf4.indexOf('st'));
console.log(buf4.indexOf('st!'));

