const {EventEmitter} = require('events')

class CustomEmitter extends EventEmitter{

}

let ce = new CustomEmitter();

ce.on('hello', () => {
  console.log('this is from an instance of eventemitter');
})

setTimeout(() => {
  ce.emit('hello');
}, 1000);