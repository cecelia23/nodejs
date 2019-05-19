const fs = require('fs');
//解决回调地狱问题
const {promisify} = require('util');
// 把fs.readFile封装成一个promise对象
const read = promisify(fs.readFile);

// read('./43_promisify.js').then(data => {
//   console.log(data.toString());
// }).catch(err => {
//   console.log(err);
// })

// 封装成一个函数
async function test () {
  try{
    const res = await read('./41_readStream.js');
    console.log(res.toString());
  } catch (ex) {
    console.log(ex);
  }
}

test();