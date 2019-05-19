const fs = require('fs');
// 回调放在最后一个参数，且回调函数的第一个参数一定要是err
// 这里第二个参数'utf8'，用于对buffer进行解码
fs.readFile('./31_fs_read.js', 'utf8', (err, data) => {
  if (err) throw err;

  console.log(data);
})