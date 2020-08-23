# 学习express

## 在expres中使用`art-template`模板引擎

- 安装
```Shell
npm install --save art-template
npm install --save express-art-template
```
- 配置
```javascript
// 当渲染以.art结尾的文件时，使用art-template模板引擎
app.engine('art', require('express-art-template'))
```
- 使用
+ express为response对象添加了一个render方法
* 默认不可使用
* 当使用模板引擎时，render方法才可以使用
```javascript
res.render('模板文件', {模板对象})
```
+ 第一个参数不能写路径，默认会从views文件夹下去找对应的模板文件

## 使用Post方法提交数据（form表单，Ajax请求）
- 安装
```Shell
npm i --save body-parser
```
- 配置
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

- 使用
req.body

## app.use() 使用中间件

### 不关心请求路径和请求方法的中间件
```javascript
app.use((req, res, next) => {
    console.log(req.query);
    next();
})
```
- 中间件本身是一个方法，接受三个参数：
+ request 请求对象
+ response 响应对象
+ next下一个`匹配的`中间件
- 当一个请求进入一个中间件，如果不调用next()，则会停留在此处不会进入下一个中间件。next是一个方法，用来调用下一个匹配的中间件

### 以/xxx开头的路径中间件
```javascript
app.use('/a', (req, res,next) => {
    console.log(req.url);
})
```

- 同一个请求的req, res对象是同一个，所以中间件的`使用顺序`很重要

### 严格匹配请求方法和请求路径的中间件
```javascript
app.get('/xxx', (req, res, next) => {
    
})
app.post('/xxx', (req, res, next) => {

})
```

## express框架中使用session：express-session插件 https://github.com/expressjs/session
- 安装
npm i express-session
- 配置
``` JavaScript
var session = require('express-session');
app.use(session({
    // 配置加密字符串
    secret: 'keyboard cat',
    // 强制对session进行存储
    resave: false,
    // 强制对新的session进行存储。设为false，在登录操作中可减少对服务器存储的访问
    saveUninitialized: false,
}))
```
- 使用
``` javascript
// 设置session
res.session.foo = 'abc';
// 读取session
res.session.foo
```