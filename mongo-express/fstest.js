/* eslint-disable no-console */
var fs = require('fs');

// fs.readFile('./views/index.html',  (err, data) => {
//     if (err) {
//         throw err
//     }
//     fs.readFile('./views/main.html', (err, data) => {
//         if (err) {
//             throw err
//         }
//         fs.readFile('./views/update.html', (err, data) => {
//             if (err) {
//                 throw err
//             }
//             console.log(data.toString());
//         })   
//         console.log(data.toString());
//     })
//     console.log(data.toString());
// })

// var p1 = new Promise((resolve, reject) => {
//     console.log('before async');
//     fs.readFile('./views/index.html', (err, data) => {
//         if (err) {
//             reject(err);
//         }
//         console.log('in async')
//         resolve(data);
//     })
// })

// var p2 = new Promise((resolve, reject) => {
//     console.log('before async');
//     fs.readFile('./views/update.html', (err, data) => {
//         if (err) {
//             reject(err);
//         }
//         console.log('in async')
//         resolve(data);
//     })
// })



// 封装
function pReadFile(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, (err, data) => {
            if (err) {
                reject(err);
            }
            resolve(data);
        })
    })
}

var p1 = pReadFile('./views/index.html');
var p2 = pReadFile('./views/update.html');


p1.then((data) => {
    console.log(data.toString());
    return p2;
}, (err) => {
    console.log('出错了', err)
}).then((data) => {
    console.log(data.toString());
} )


