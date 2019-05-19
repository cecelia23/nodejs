// 下一个事件队列的队首执行，最慢
setImmediate(()=>{
  console.log("serImmediate");
});

//setTimeout 介于nextTick和setImmediate之间
setTimeout(() => {
  console.log("setTimeout");
}, 0);

//当前事件队列的队尾执行，最快
process.nextTick(()=>{
  console.log("nextTick");
})