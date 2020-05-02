var http = require('http');
var fs = require('fs');
var url = require('url');
var template = require('art-template');

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

http.createServer((req, res) => {
    // 加上第二个参数true, 可以将查询字符串转为一个对象
    const parseObj = url.parse(req.url, true);
    const {pathname} = parseObj;
    if (pathname === '/') {
     fs.readFile('./resource/index.html', (err, data) => {
         if (err) {
             return res.end('404 not found');
         }
        //  res.setHeader("Content-Type", "text/html;charset=utf-8")
         var result = template.render(data.toString(), {commons});
         res.end(result);
     })
    } else if (pathname === '/post') {
        fs.readFile('./resource/post.html', (err,data) => {
            if (err) {
                return res.end('404 not found');
            }
            res.end(data);
        })
    } else if (pathname === '/commons') {
        // 1. 获取用户提交的数据
        const {name, message} = parseObj.query;
        // 2. 记录下此时的时间，存储数据
        const dateTime = new Date(Date.now()).toLocaleString();
        commons.push({name, message, dateTime});
        // 3. 重定向到主页(完成以下两步，浏览器就会自动跳转)
        // console.log(name, message, dateTime);
            // 3.1 将状态码设为302，临时重定向
        res.statusCode = 302;
            // 3.2 将header中的location写为新的地址
        res.setHeader('Location', '/');
        //  结束相应
        res.end();
    } else if (pathname.indexOf('/public/') === 0) {
        // 将浏览器中请求pathname转换为文件的相对路径，加上.
        fs.readFile('.' + pathname, (err,data) => {
            if (err) {
                return res.end('404 not found');
            }
            res.end(data);
        })
    } else {
        fs.readFile('./resource/404.html', (err,data) => {
            if (err) {
                return res.end('404 not found');
            }
            res.end(data);
        })
    }
}).listen(5500, () => {
    console.log('server is running...');
})