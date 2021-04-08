const multer = require('@koa/multer');

const upload = (obj) => {
  const generateDir = require('./generateDir');

  const storage = multer.diskStorage({
    // 按照 path 上传图片
    destination: (ctx, file, cb) => {
      const pathNow = `uploads/${obj.uuidfolder}`;
      generateDir(pathNow, cb(null, pathNow));
    },
    filename: (ctx, file, cb) => {
      cb(null, `${obj.imgorder}`);
    }
  });
  return multer({ storage });
};

module.exports = upload;