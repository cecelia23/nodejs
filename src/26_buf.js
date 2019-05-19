const buf = Buffer.allocUnsafe(10);
buf.fill(10,2,5);
console.log(buf)

const buf1 = Buffer.from('test');
const buf2 = Buffer.from('test');
const buf3 = Buffer.from('test.');
// 判断buf中的内容是否相同
console.log(buf1.equals(buf2));
console.log(buf2.equals(buf3));

console.log(buf1.indexOf('es'));
console.log(buf1.indexOf('esa'));
