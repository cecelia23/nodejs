/* eslint-disable no-console */
var express = require('express');
// var fs = require('fs');
var bodyParser = require('body-parser');
var router = require('./router/router');
// var manager = require('./student');
var app = express();

app.engine('html', require('express-art-template'));

app.use('/public/', express.static('./public/'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));
// parse application/json
app.use(bodyParser.json());

// test
// manager.alter({
//     id: 1,
//     name: "张红红",
//     age: 30
// }, (err) => {
//     if (err) {
//         console.log("修改失败");
//     }
//     console.log("修改成功");
// })

// app.get('/', (req, res) => {
//     fs.readFile('./db.json', 'utf-8', (err, data) => {
//         if (err) {
//             return res.status(500).send("server error.");
//         }
//         var students = JSON.parse(data).students;
//         console.log(students);
//         res.render('main.html', {
//             title: '测试',
//             students
//         })
//     })
// })
// 把router挂载到app服务上
app.use(router);

app.listen(3000, () => {
    console.log('3000 is listening...');
})
