# nodejs学习笔记

## 代码风格

- JavaScript Standard style
- airbnb javaScript style
+ 当使用无分号的代码风格时，一行代码以 ( , [ ,` 开头的时候，需要与前面的代码以;隔开

## 服务器渲染

- 在服务端使用模板引擎（如art-template, ejs, jade(pug), handlebars, nunjucks）
- 浏览器端渲染（异步渲染），不利于SEO（搜索引擎优化）
- 服务器端渲染可以被爬虫抓取到，而客户端渲染很难被爬虫抓取
- 一般网站既不是纯服务器端渲染，又不是纯异步（客户端）渲染，而是两者结合起来
- 例如，京东商品列表是服务器端渲染，便于SEO; 商品评论列表是异步渲染（比较快），有利于用户体验

### 异步编程
在定义的函数中，为了获取异步调用的结果（readFile, ajax请求等），需要通过传入callback回调函数。
```javascript
function add(filePath, callback) {
    fs.readFile(filePath, (err, data) => {
        // 拿到数据
        if (!err) {
            callback(null, data)
        }
    })
}
```

## 表单提交

- 同步提交
+ 无论服务器响应的是什么内容，都会直接显示在页面上，覆盖原始页面内容。（如：直接展示json对象）

- 异步提交
+ 服务端返回响应信息，浏览器拿到后可根据需要进行处理，展示效果更为丰富合理。（如：根据双方事先定义的Status确定提示信息）

服务端重定向只对同步提交生效，对异步提交无效（只能通过浏览器端重定向）


## 模块

### CommonJS模块规范

+ 模块作用域
+ 使用require导入
* 导入时， `var 自定义变量名 = require('模块名);`
+ 使用exports / module.exports导出 
* 如果要直接导出模块中的`单个`变量/方法，而非使用挂载的方式，必须使用`module.exports = 自定义变量名`，不能使用export
* 导出多个成员：
``` JavaScript
exports.a = 123;
exports.b = "hello"
exports.c = function () {
    console.log("ccc");
}
exports.d = {
    name: "alex"
}
```
或者
``` JavaScript
module.exports = {
    add: function(x,y) {
        return x + y;
    },
    d: {
        name: 'alex'
    }
}
```
+ 原理解析 `最终return的是module.exports`
``` JavaScript
// 模块中默认有一句： exports = module.exports
console.log(exports === module.exports); // true

export.foo = "bar"
// 等价于
module.exports.foo = "bar"
```
### 模块分类

- 核心模块：本质也是文件，只不过已经被编译成二进制文件，通过`require('模块标识符')`进行加载即可。
+ fs
+ http
+ url
+ path

- 第三方模块：必须手动install，通过`require('包名')`加载。（找到对用包的package.json中的main属性；如果没有的话，该文件夹下的index.js会默认使用）
+ 我们的项目有且只有一个node_modules, 放在`项目根目录`。项目的所有子目录中的文件都可以使用。
+ art-template

- 自定义的模块

### 模块加载
- 优先从缓存中加载，如果在之前加载的模块a中加载过了模块b，则不会重复加载，只从中拿到exports导出的接口对象。
- 核心模块
- 路径形式的自定义模块
- 第三方模块(找node_modules中相应的文件夹，如果同一级的没找到，就一级一级地向外查找，直到磁盘根目录)

## package.json和package-lock.json

- npm 5以后的版本不需要加--save，也会将其自动保存到dependencies中
- 下载包时，会自动更新或添加`package-lock.json`
+ 该文件中保存了node_modules文件夹中所有依赖的信息（版本、下载地址）。当以后再执行`npm i`时，速度会更快。
+ 该文件锁定了包的版本，防止再次下载时自动升级包的版本


## 淘宝镜像

- 安装（之后使用cnpm代替npm）
```Shell
npm i --global cnpm
```
- 不安装，只配置（之后使用npm即可）
npm config set register [url]
+ 淘宝：https://registry.npm.taobao.org
+ 国外：http://registry.npmjs.org

- 查看配置信息
npm config list


## 文件路径模块 path

- path.basename
- path.dirname
- path.extname
- path.parse
- path.join

## node中的其他成员

除了require, exports等模块相关的API，还有两个特殊的成员。
- __dirname **动态获取**当前文件模块所属`目录的绝对路径`
- __filename **动态获取**`当前文件的绝对路径`

- 在node中`文件`的相对路径，被设计为：相对于执行node命令所在的路径；（这里要区别于模块的相对路径`require('./a')`：相对于当前文件）
- 所以要使用 `动态的绝对路径` __dirname, __filename, 将相对路径转变为动态地绝对路径
- 在拼接路径时，为了避免一些低级错误，使用path.join()进行拼接
