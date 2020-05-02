var http = require('http');
var fs = require('fs');
// 模板渲染
var template = require('art-template');
var path = require('path');

const server = http.createServer();

server.on('request', (req, res) => {
    var url = req.url;
    var rootDir = 'E:/nodejs/exercise';
    fs.readdir(path.join(rootDir, url), (err, files) => {
        if (err) {
            return res.end('读取目录失败，请重试！');
        }
        fs.readFile('./resource/template.html', (err, data) => {
            if (err) {
                return res.end('读取模板文件失败！');
            }
            var result = template.render(data.toString(), {
                title: url.slice(1),
                files: files,
                time: new Date(Date.now()).toLocaleString()
            })
            
            res.end(result);
        })
    })

})

server.listen(5500, () => {
    console.log('server is running....');
})