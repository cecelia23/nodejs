var express = require('express');
// var fs = require('fs');
var manager = require('../student');

// 1. 创建路由容器
var router = express.Router();

// 2. 将方法挂载到router上
// 获取首页
router.get('/', (req, res) => {
    manager.findAll((err, data) => {
        if (err) {
            return res.status(500).send("server error...");
        }
        res.render('main.html', {
            students: data
        })
    });
    // fs.readFile('./db.json', 'utf-8', (err, data) => {
    //     if (err) {
    //         return res.status(500).send("server error.");
    //     }
    //     var students = JSON.parse(data).students;
    //     res.render('csdn.html', {
    //         title: '测试',
    //         students
    //     })
    // })
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
    manager.add(reqObj, (err) => {
        if (err) {
            res.status(500).send("add error");
        }
        res.redirect('/');
    })
})

// 进入修改学生信息页面
router.get('/edit', (req, res) => {
    var id = req.query.id;
    id = parseInt(id);
    manager.find(id, (err, student) => {
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
    student.id = parseInt(student.id);
    student.gender = parseInt(student.gender);
    student.age = parseInt(student.age);
    manager.alter(student, (err) => {
        if (err) {
            return res.status(500).send("server err");
        }
        res.redirect('/')
    })
})

router.get('/delete', (req, res) => {
    var studentID = parseInt(req.query.id);
    manager.delete(studentID, (err) => {
        if (err) {
            res.status(500).send("server error...");
        }
        res.redirect('/');
    })  
})
// 3. 导出router
module.exports = router;