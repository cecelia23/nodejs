var fs = require("fs");

fs.writeFile('./src/hello.txt', "大家好，nodejs想你问好",(err) => {
    if (err) {
        console.log("文件写入失败");
        return;
    }
    console.log("文件写入成功");
})