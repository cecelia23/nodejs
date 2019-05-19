// 初始化申请内存为10个的buffer，默认填充0
console.log(Buffer.alloc(10))
// 默认填充2
console.log(Buffer.alloc(8,2))
// 申请了，但未初始化，可能一开始有内容了
console.log(Buffer.allocUnsafe(4))
// 由数组创建buffer
console.log(Buffer.from([1,2,3]))
// 由字符串创建buffer
console.log(Buffer.from('test'))
// 制定编码方式
console.log(Buffer.from('test','base64'))


