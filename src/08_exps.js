// 默认情况下，exports是module.exports的快捷方式
//const exports = module.exports;


//可以修改module.exports,但不能修改单独的exports

//  在main.js中读取name时，返回undefined
// exports = {
//   name:"alex",
//   age:20
// };

// 在main.js中读取name时，返回hello
module.exports = {
  name:"hello",
  age:30
}
// module.exports指向了一个新的对象，要重新赋值，使exports还能作module.exports的快捷方式
exports = module.exports
exports.test = 100;
