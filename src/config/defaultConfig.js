module.exports = {
   // 服务器端配置
   root: process.cwd(),
   hostname : "127.0.0.1",
   port : 9753,
   compress: /\.(html|css|js|txt|md)/,
   cache: {
      maxAge: 600,
      expires: false,
      cacheControl: true,
      lastModified: true,
      Etag: true
   }
}