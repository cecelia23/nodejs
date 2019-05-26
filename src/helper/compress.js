const {createGzip, createDeflate} = require('zlib');
module.exports = (rs, req, res) => {
  const acceptEncoding = req.headers['accept-encoding'];
  if (!acceptEncoding || !acceptEncoding.match(/\b(gzip|deflate)\b/)) {
    return rs;
  } else if (acceptEncoding.match(/\b(gzip)\b/)) {
    res.setHeader('Content-encoding', 'gzip');
    // 写法需要注意！
    return rs.pipe(createGzip());
  } else if (acceptEncoding.match(/\b(deflate)\b/)) {
    res.setHeader('Content-encoding', 'deflate');
    return rs.pipe(createDeflate());
  }
};