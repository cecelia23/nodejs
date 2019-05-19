const {EventEmitter} = require('events')

class customEmitter extends EventEmitter {

}

function fn1 () {
  console.log('fn1');
}

function fn2 () {
  console.log('fn2');
}

const ce = new customEmitter();

ce.on('test', fn1);
ce.on('test', fn2);

setInterval(() => {
  ce.emit('test')
}, 500);

setTimeout(() => {
  // 移除单个
  // ce.removeListener('test', fn1)
  // 移除所有
  ce.removeAllListeners('test')
}, 2000);