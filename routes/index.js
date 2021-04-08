const fs = require('fs');
const path = require('path');
const router = require('koa-router')()

const upload = require('../utils/multer');

router.get('/', async (ctx, next) => {
  const file = fs.readFileSync("./views/index.html");
  ctx.type = "text/html";
  ctx.body = file;
})

router.post('/upload', async (ctx, next) => {
  console.log(ctx.request.body);
  await upload(ctx.request.body).single("file")(ctx, next);

  
  ctx.body = "ok"
})

module.exports = router;