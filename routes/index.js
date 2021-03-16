const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  ctx.body = "ada"
})

module.exports = router
