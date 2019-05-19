const fs = require('fs');

fs.stat('./31_fs_readFile.js',(err, stats) => {
  if (err) { //说明文件不存在
    console.log('文件不存在');
    return;
  }
  console.log(stats.isFile());
  console.log(stats.isDirectory());
  console.log(stats);
})