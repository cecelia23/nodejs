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

## app.use()
- 中间件（后面补充）
- 不仅仅用来开放静态资源，还可以实现很多功能，如配置body-parser
-