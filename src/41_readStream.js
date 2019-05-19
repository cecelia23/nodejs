const fs = require('fs')

const rs = fs.createReadStream('./41_readStream.js');
// 与readFile相比更优雅，因为是读到一点，就输出一点
rs.pipe(process.stdout)

