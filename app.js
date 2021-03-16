const Koa = require('koa')
const app = new Koa()

const index = require('./routes/index')

app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

app.use(index.routes(), index.allowedMethods())

app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

const port = 6090;
app.listen(port, err => {
  if(err) throw err;
  console.log(`app start at ${port}`);
});