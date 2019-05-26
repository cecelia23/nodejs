const fs = require('fs');
const path = require('path');
const promisify = require('util').promisify;
const stat = promisify(fs.stat);
const readdir = promisify(fs.readdir);
const Handlebars = require('handlebars');
// const config = require('../config/defaultConfig');

// 模板引擎渲染
const tplPath = path.join(__dirname,'../templates/dir.tpl');
const source = fs.readFileSync(tplPath);
const template = Handlebars.compile(source.toString());

const mine = require('./mine');
const compress = require('./compress');
const range = require('./range');
const isFresh = require('./cache');

//async await异步
module.exports = async function(req, res, url, config) {
  try {
    const stats = await stat(url);
    if (stats.isFile()) {
      const contentType = mine(url);
      res.setHeader('content-type', contentType);
      // 是否新鲜，是否从缓存中取
      if (isFresh(stats, req, res)) {
        res.statusCode = 304;
        // 不返回内容了
        res.end();
        return;
      }
      let rs;
      const {code, start, end} = range(stats.size, req, res);
      if (code === 200) {
        res.statusCode = 200;
        rs = fs.createReadStream(url);
      } else {
        res.statusCode = 206;
        rs = fs.createReadStream(url, {start, end});
      }
      //压缩encoding
      if (url.match(config.compress)) {
        rs = compress(rs, req, res);
      }
      rs.pipe(res);
    } else if (stats.isDirectory()) {
      const files = await readdir(url);
      res.statusCode = 200;
      res.setHeader('content-Type', 'text/html');
      // 最开始进入的是根路径，然后进入下一级目录时，就需要相对路径了
      const dir = path.relative(config.root, url);
      const data = {
        title: path.basename(url),
        // 相对于根目录的！（解决第二级子目录的路径包含第一级的相对路径,如/src/src/helper）
        // path.relative 访问根路径时，返回的是''
        dir: dir ? `/${dir}` : '',
        files: files.map((file) => {
          return {
            file,
            icon: mine(file)   //文件的content-type
          }
        })
      };
      res.end(template(data)); //模板引擎渲染
    }
  } catch (ex) {
    console.error(ex);
    res.statusCode = 404;
    res.setHeader('content-type','text/plain');
    res.end(`${url} is not a directory or file.\n ${ex}`);
  }
};