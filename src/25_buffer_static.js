// console.log(Buffer.isBuffer({}));
// console.log(Buffer.isBuffer(Buffer.from([1,3,4])));

// console.log(Buffer.byteLength('test'));
// console.log(Buffer.byteLength('测试'));

const buf1 = Buffer.from('This ');
const buf2 = Buffer.from('is ');
const buf3 = Buffer.from('a ');
const buf4 = Buffer.from('cat');

const buf = Buffer.concat([buf1, buf2, buf3, buf4])
console.log(buf.toString())