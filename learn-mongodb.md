## MongoDB
- 非关系型数据库（noSQL）
- 不需要设计表结构（更灵活）
+ 自上而下依次是
* 数据库
* 集合（table）
* 文档对象（记录）

### 启动
``` shell
# 切换到数据库/data/db所在盘符下
mongod
```

### 链接
- 另起一个cmd
``` shell
# 连接
mongo
# 退出
exit
```
### 命令
- 常看数据库 `show dbs`
- 切换到指定的数据库（如果没有会新建） `use 数据库名称`
- 常看当前操作的数据库 `db`
- 查看所有集合 ``show collections`
- 向集合中插入文档  `db.students.insert({"name":"sansan"})`
- 查看集合中所有文档 `db.students.find()`

### 在nodejs中使用mongodb
- 使用官方的包(比较原生，这里不使用)  https://www.npmjs.com/package/mongodb
- 第三方包mongoose(在mongodb上做了一层封装)