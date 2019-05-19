const {argv,argv0,execArgv,execPath} = process;
// 从第三个参数开始，读取从外部传入的参数
console.log("argv",argv);

console.log("argv0",argv0);
// 获取调试参数（写在文件名之前的）
console.log("execArgv",execArgv);
// 显示命令执行路径
console.log("execPath",execPath);
