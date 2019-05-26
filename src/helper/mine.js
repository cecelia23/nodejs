const path = require('path');

const mineType = {
  "txt" : "text/plain",
  "html" : "text/html",
  "css" : "text/css",
  "js": "text/javascript",
  "jpg" : "image/jpeg",
  "jpeg": "image/icon",
  "gif" : "image/gif",
  "json" :"application/json",
  "pdf" : "application/pdf",
  "xml" : "text/xml"
};

module.exports = (filename) => {
  let ext = path.extname(filename)
  .split('.').pop().toLowerCase();

  if (!ext) {
    ext = filename;
  }
  return mineType[ext] || mineType['txt'];
}