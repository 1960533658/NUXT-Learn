const router = require('koa-router')()

// 自动添加再当前路径中的路由中添加 "/users"
router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar responses wdsd'
})

module.exports = router