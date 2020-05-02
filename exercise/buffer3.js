const StringDecoder = require('string_decoder').StringDecoder;
const decoder = new StringDecoder('utf8');

const buf1 = Buffer.from('中文字符串！');

for (let i = 0; i < buf1.length; i +=5) {
    let b = Buffer.alloc(5);
    buf1.copy(b,0,i);
    console.log(decoder.write(b));
}