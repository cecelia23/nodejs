var fs = require('fs');
var dbPath = './db.json';

function writeBack (data, callback) {
    fs.writeFile(dbPath, JSON.stringify({students: data}), (err) => {
        if (err) {
         return callback(err);
        }
        return callback(null);
     })
}

// 查询所有学生
exports.findAll = (callback) => {
    fs.readFile(dbPath, 'utf-8', (err, data) => {
        if (err) {
            return callback(err);
        }
        var students = JSON.parse(data).students;
        return callback(null, students);
    })
}

// 添加学生
exports.add = (obj, callback) => {
    fs.readFile(dbPath, 'utf-8', (err, data) => {
        if (err) {
            return callback(err);
        }
        var { students } = JSON.parse(data);
        obj.id = students[students.length - 1].id + 1;
        students.push(obj);
        writeBack(students, callback);
    })
}
// 查找ID对应的学生对象
exports.find = (studentID, callback) => {
    fs.readFile(dbPath, 'utf-8', (err, data) => {
        if (err) {
            return callback(err)
        }
        var { students } = JSON.parse(data);
        var student = students.find((stu) => {
            return stu.id === studentID;
        });
        return callback(null, student);
    })
}

// 更改学生信息
exports.alter = (student, callback) => {
    fs.readFile(dbPath, (err, data) => {
        if (err) {
            return callback(err);
        }
        var {students} = JSON.parse(data);
        
        var item = students.find((item) => {
            return item.id === student.id
        })

        for (let key in student) {
            item[key] = student[key];
        }
        writeBack(students, callback);
    })
}



// 删除学生
exports.delete = (studentID, callback) => {
    fs.readFile(dbPath, 'utf-8', (err, data) => {
        if (err) {
            return callback(err);
        }
        var { students } = JSON.parse(data);
        var index = students.findIndex((stu) => {
           return studentID === stu.id;
        })
        students.splice(index, 1);
        // for (let i = 0; i < students.length; i++) {
        //     if (studentID === students[i].id) {
        //         students.splice(i, 1);
        //     }
        // }
        writeBack(students, callback)
    })
}