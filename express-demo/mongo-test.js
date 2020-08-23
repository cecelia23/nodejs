const mongoose = require('mongoose');
var Schema = mongoose.Schema;

// 连接
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});
// 设计集合结构
var userSchema = new Schema({
    name:  {
        type: String, // String is shorthand for {type: String}
        required: true
    }, 
    password: {
        type: String,
        required:true
    },
    email: String
  });

  // 将文档结构发布为模型
  // monggose.model接受两个参数，
  // 第一个参数为字符串，大写开头，而集合的名称为对应的小写复数
  // 第二个参数为Schema
  // 返回值：模型构造函数
  var User = mongoose.model('User', userSchema);

  // 添加数据
// const user = new User({ name: 'sansan', password: '127823' });
// user.save((err) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log('保存成功', ret);
// });

// 查询所有
User.find((err, ret) => {
    if (err) {
        console.log('查询失败');
    }
    console.log(ret);
})
// 条件查询
// User.findOne({name: 'sansan'}, (err, ret) => {
//     if (err) {
//         console.log('查询失败');
//     }
//     console.log(ret);
// })

// 删除
// User.remove({name: 'Zildjian'}, (err, ret) => {
//     if (err) {
//         console.log('删除失败');
//     }
//     console.log('删除成功', ret);
// })

// 修改或更新
// User.findByIdAndUpdate('5eb1287ec4877415986d5d53', 
//     {name: 'susan', password: 'ad09873'}, (err, data) => {
//         if (err) {
//             console.log('更新失败')
//         }
//         console.log('更新成功', data)
//     }
// )