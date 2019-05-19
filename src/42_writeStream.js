const fs = require('fs');
// 文件删除
// fs.unlink('./text', (err) => {
//   if (err) throw err;
//   console.log('done');
// })

//生产一点，写一点
const ws = fs.createWriteStream('./text.txt');

let tid = setInterval(() => {
  let num = parseInt(Math.random() * 10);
  if (num < 8) {
    // 只能写buffer/string，所以要把数字转成string
    ws.write(num.toString());
  } else {
    clearInterval(tid);
    ws.end(); //调用end时，会emit 'finish'事件
  }
}, 200);

ws.on('finish', () => {
  console.log('done');
})