const Koa = require('koa');
const app = new Koa();
const bodyParser = require('koa-bodyparser');
const formidable = require('koa2-formidable');

const index = require('./routes/index');

app.use(formidable());
app.use(bodyParser());

const multer = require('@koa/multer');

app.use(multer().any());

app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
})

app.use(index.routes(), index.allowedMethods());

app.on('error', (err, ctx) => {
  console.error('server error', err, ctx);
});

const port = 6090;
app.listen(port, err => {
  if(err) throw err;
  console.log(`app start at ${port}`);
});