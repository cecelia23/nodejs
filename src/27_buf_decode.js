const StringDecoder =  require('string_decoder').StringDecoder;
const string_decoder = new StringDecoder('utf8');

const buf1 = Buffer.from('中文文字');

for (let i = 0; i < buf1.length ;i += 5) {
  const b = Buffer.allocUnsafe(5);
  buf1.copy(b, 0, i);
  console.log(string_decoder.write(b));
}