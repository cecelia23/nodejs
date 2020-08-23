var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.engine('html', require('express-art-template'));

// 请求路径以/public/开头，开放访问路径中的./public/文件夹中的内容
// app.use('/public/', express.static('./public/'));

// 请求路径中省略/public/
app.use(express.static('./public/'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));
// parse application/json
app.use(bodyParser.json());

var commons = [
    {
        name: 'alex',
        message: 'zhelifengjignyoumei ',
        dateTime: '2020-05-01 10:19:57'
    },
    {
        name: 'xiao ming',
        message: 'woxihuan zheli ',
        dateTime: '2020-05-01 10:26:57'
    },{
        name: 'huahua',
        message: 'woshihuahua, woaihuahau',
        dateTime: '2020-05-01 10:45:57'
    },{
        name: 'fangfang',
        message: 'liuyandingtie',
        dateTime: '2020-05-01 10:51:57'
    }
]

app.get('/', (req, res) => {
    res.render('index.html', {
        title: '主页',
        commons
    });
})

app.get('/post', (req, res) => {
    res.render('post.html');
})

app.post('/commons', (req, res) => {
    var obj = req.body;
    obj.dateTime = new Date(Date.now()).toLocaleString();
    commons.unshift(obj);
    res.redirect('/');
})

app.get('/login', (req, res) => {
    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1>login page</h1>
    </body>
    </html>`)
})

app.listen(3000, () => {
    console.log('server is running....');
})