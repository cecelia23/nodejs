var http = require('http');
var fs = require('fs');
var server = http.createServer();

server.on('request', (req, res) => {
    if (req.url === '/plain') {
        res.setHeader('Content-Type', "text/plain;charset=utf-8");
        res.end("你好，劳动节快乐")
    } else if(req.url === '/html') {
        res.setHeader("Content-Type", "text/html;charset=utf-8");
        res.end("<p>hello<a href='https://www.baidu.com'>点我</a></p>");
    } else if (req.url === '/') {
        fs.readFile('./resource/main.html', (err, data) => {
            if (err) {
                res.setHeader("Content-Type", "text/plain;charset=utf-8");
                res.end('读取文件失败，请稍后再试！');
            } else {
                res.end(data);
            }
        }) 
    } else if (req.url === '/pic') {
        fs.readFile('./resource/hi.jpg', (err, data) => {
            if (err) {
                res.setHeader("Content-Type", "text/plain;charset=utf-8");
                res.end('读取文件失败，请稍后再试！');
            } else {
                res.setHeader("Content-Type", "image/jpeg");
                res.end(data);
            }
        })
    } else {
        res.end("this is main page");
    }
});

server.listen(5500, () => {
    // eslint-disable-next-line no-console
    console.log("welcome to 中文乱码...");
})