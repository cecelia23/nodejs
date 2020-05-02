var http = require("http");
// 创建HTTP实例
const server = http.createServer();

// 监听request请求，设置请求处理函数
server.on("request", (req, res) => {
  // 接受请求
  // 请求对象 req
  // 响应对象 res
  let result;
  if (req.url === "/login") {
    res.end("login page");
  } else if (req.url === "/register") {
    res.end("register page");
  } else if (req.url === "/") {
    res.end("main page");
  } else if (req.url === "/products") {
    let product = [
      {
        name: "apple",
        price: 10,
      },
      {
        name: "pineapple",
        price: 15,
      },
      {
        name: "pear",
        price: 8,
      },
    ];
    res.end(JSON.stringify(product));
  } else {
    res.end("404 not found");
  }
  // 这里使用res对象的write方法向客户端发送响应，注意结尾一定加end
  //   res.write(result);
  // 可以呈现给页面了
  res.end(result);
});
// 绑定端口号，启动服务
server.listen(5500, () => {
  console.log("开启对http://127.0.0.1:5500的监听");
});
