const {sep, win32,posix, delimiter} = require('path');

console.log('sep:', sep);
// console.log('path:', process.env.path);
console.log('delimiters:',delimiter);

console.log('win32 sep:', win32.sep);
console.log('win32 delimiters:', win32.delimiter);

console.log('posix sep:', posix.sep);
console.log('posix delimiters:', posix.delimiter);

