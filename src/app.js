const http = require('http');
const conf = require('./config/defaultConfig');
const path = require('path');
// const fs = require('fs');
const route = require('./helper/route');
const chalk = require('chalk');

class Server {
  constructor (config) {
    //把默认conf和用户输入的config进行合并，放入this
    this.conf = Object.assign({}, conf, config);
  }
  start () {
    const server = http.createServer((req, res) => {
      const url = path.join(this.conf.root, req.url);
      route(req, res, url, this.conf);
    })
    
    server.listen(this.conf.port, this.conf.hostname, () => {
      const addr = `http://${this.conf.hostname}:${this.conf.port}`
      console.info(`Server started at ${chalk.green(addr)}`)
    })
  }
}

module.exports = Server;