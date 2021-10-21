const Koa = require('koa')  // 启动koa包
const app = new Koa()  // 创建app服务
const views = require('koa-views')  // 处理静态资源
const json = require('koa-json')  // json数据个书画
const onerror = require('koa-onerror')  // 处理异常
const bodyparser = require('koa-bodyparser')  // 解析post请求
const logger = require('koa-logger')  // 记录日志

// 启动 dotenv
require('dotenv').config()
// 加载路由
const index = require('./routes/index')
const users = require('./routes/users')
// 分页页面
const category = require('./routes/category')
// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes 注册路由
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())
app.use(category.routes(), category.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
