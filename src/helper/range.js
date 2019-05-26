module.exports = (totalSize, req, res) => {
  const range = req.headers['range'];
  if (!range) {
    return {
      code: 200
    };
  }
  const result = range.match(/byte=(\d*)-(\d*)/);
  const end = result[2] || totalSize - 1;
  const start = result[1] || totalSize - end;

  if (start > end || start < 0 || end > 0) {
    return {
      code: 200
    };
  } 
  res.setHeader('accept-ranges','byte');
  res.setHeader('content-range',`byte ${start}-${end}/${totalSize}`);
  res.setHeader('content-length', end - start)
  return {
    code: 206,
    start: parseInt(start),
    end: parseInt(end)
  }
};