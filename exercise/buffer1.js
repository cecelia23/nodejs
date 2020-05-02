console.log(Buffer.byteLength('HELLO'));
console.log(Buffer.byteLength('特别'));

console.log(Buffer.isBuffer({}));
console.log(Buffer.isBuffer(Buffer.from([1,2,3])));

const buf1 =  Buffer.from('this ');
const buf2 =  Buffer.from('is ');
const buf3 =  Buffer.from('a ');
const buf4 =  Buffer.from('test');
const buf5 =  Buffer.from('!');
// 传入buffer数组
const buf = Buffer.concat([buf1, buf2, buf3, buf4, buf5]);
console.log(buf.toString());