const {basename, dirname, extname} = require('path')

const name = 'usr/local/bin/hello.txt'
console.log(basename(name)); //文件名
console.log(dirname(name));  //路径名
console.log(extname(name));  //拓展名

