const {join} = require('path');
//忽略前后的斜线，直接拼接为路径
console.log(join('/usr','local','bin/'));

console.log(join('/usr','../local','bin'))