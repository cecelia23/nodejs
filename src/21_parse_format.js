const {parse, format} = require('path');

const filepath = 'usr/local/bin/node_modules/package.json';

let res = parse(filepath);

console.log(res);

console.log(format(res));


