const test = "hello";

// 全局对象上声明变量testVar; 如果不写，直接使用会报错，undefined
global.testVar = 123;

module.exports.testVar = test;

