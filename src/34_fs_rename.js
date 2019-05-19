const fs = require('fs');

fs.rename('./test','./test.txt', (err) => {
  if (err) throw err;
  console.log('done!')
})