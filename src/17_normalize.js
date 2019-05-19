const {normalize} = require('path');
//规范化
console.log(normalize('/usr//local/file'));

console.log(normalize('/usr/local/../file'));

