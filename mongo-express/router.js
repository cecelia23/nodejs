/* eslint-disable no-console */
var express = require('express');

var mongoose = require('mongoose');

// 连接(省略端口号：使用mongodb的默认端口；最后跟上要连接的集合名称)
mongoose.connect('mongodb://127.0.0.1/student', { useUnifiedTopology: true } );

var Schema = mongoose.Schema;

var StudentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
    }, 
    gender: {
        type: Number,
        enum: [0, 1],
        default: 0
    },
    hobbies: {
        type: String
    }
})

var Student = mongoose.model('Student', StudentSchema);

// 1. 创建路由容器
var router = express.Router();

// 2. 将方法挂载到router上
// 获取首页
router.get('/', (req, res) => {
    Student.find((err, data) => {
        if (err) {
            return res.status(500).send("server error...");
        }
        res.render('main.html', {
            students: data
        })
    });
})

// 进入添加学生
router.get('/post', (req, res) => {
    res.render('post.html')
})
// 处理添加信息
router.post('/commons', (req, res) => {
    var reqObj = req.body;
    reqObj.age = parseInt(reqObj.age);
    reqObj.gender = parseInt(reqObj.gender);

    var stu = new Student();
    for (let key in reqObj) {
        stu[key] = reqObj[key];
    }
    stu.save((err) => {
        if (err) {
            res.status(500).send("add error");
        }
        console.log('保存成功！');
        res.redirect('/');
    })
})

// 进入修改学生信息页面
router.get('/edit', (req, res) => {
    var id = req.query.id.replace(/"/g, '');
    Student.findOne({ _id:id }, (err, student) => {
        if (err) {
            return res.status(500).send("server error");
        }
        res.render('update.html', {
            stu: student
        })
    })
})

// 修改学生信息post
router.post('/edit', (req, res) => {
    var student = req.body;
    student.id = student.id.replace(/"/g, '');
    student.gender = parseInt(student.gender);
    student.age = parseInt(student.age);
    Student.findByIdAndUpdate(student.id, student, (err) => {
        if (err) {
            return res.status(500).send("server err");
        }
        res.redirect('/')
    })
})

router.get('/delete', (req, res) => {
    var id = req.query.id.replace(/"/g, '');
    Student.findByIdAndDelete(id, (err) => {
        if (err) {
            res.status(500).send("server error...");
        }
        res.redirect('/');
    })  
})
// 3. 导出router
module.exports = router;