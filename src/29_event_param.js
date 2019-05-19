const {EventEmitter} = require('events');

class CustomEmitter extends EventEmitter {

}

const ce = new CustomEmitter();
// 传参
ce.on('error', (err, time) => {
  console.log(err);
  console.log(time);
})

ce.emit('error', new Error('pooo!'), new Date(Date.now()))

// once方法
// ce.once('test', () => {
//   console.log('testing')
// })

// setInterval(() => {
//   ce.emit('test')
// }, 500);