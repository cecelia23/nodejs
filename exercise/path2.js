const path = require('path');


console.log('__filename:     ' , __filename);
console.log('__dirname:     ' , __dirname);
console.log('process.cwd():   ', process.cwd());   // 在哪里调用nodejs
console.log('path.resolve(./):', path.resolve('./'))  //.将相对路径解析为绝对路径