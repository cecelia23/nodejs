const {cache} = require('../config/defaultConfig')
function refreshRes (stats, res) {
  const {maxAge, expires, cacheControl, lastModified, Etag} = cache;
  if (expires) {
    res.setHeader('Expires', new Date(Date.now() + maxAge * 1000).toUTCString());
  }
  if (cacheControl) {
    res.setHeader('Cache-Control',`public, max-age=${maxAge}`);
  }
  if (lastModified) {
    //toUTCString()一定要写，不然报错
    res.setHeader('Last-Modified', stats.mtime.toUTCString());
  }
  if (Etag) {
    //toUTCString()一定要写，不然报错
    res.setHeader('Etag', `${stats.size}-${stats.mtime.toUTCString()}`)
  }
}

// 暴露出一个方法决定是否使用缓存
module.exports = function isFresh(stats, req, res) {
  refreshRes(stats, res);
  const etag = req.headers['If-None-Match'];
  const modified = req.headers['If-Modified-Since'];
  if (!etag && !modified) {
    return false;
  }
  if (modified && modified !== res.getHeader('Last-Modified')) {
    return false;
  }
   
  if (etag && etag !== res.getHeader('Etag')) {
    return false;
  }
  return true;
}