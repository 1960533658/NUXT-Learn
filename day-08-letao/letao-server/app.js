const Koa = require('koa')  // 启动koa包
const app = new Koa()  // 创建app服务
const views = require('koa-views')  // 处理静态资源
const json = require('koa-json')  // json数据个书画
const onerror = require('koa-onerror')  // 处理异常
const bodyparser = require('koa-bodyparser')  // 解析post请求
const logger = require('koa-logger')  // 记录日志
const jwt = require('koa-jwt') // 引入koa-jwt
const { jwtScrite } = require('./config') // 引入jwt加密字符串

// 启动 dotenv
require('dotenv').config()
// 加载路由
const index = require('./routes/index')
const users = require('./routes/users')
// 分页页面
const category = require('./routes/category')
// 发送验证吗
const sms = require('./routes/sms')
// 订单微信支付
const order = require("./routes/order") 

// error handler
onerror(app)

//#region  使用koa-jwt中间件 拦截客户端调用服务端接口时 如果没有带token就返回401
// app.use(function (ctx, next) {
//   return next().catch((err) => {
//     if (401 == err.status) {
//       ctx.status = 401;
//       ctx.body = 'Protected resource, use Authorization header to get access\n';
//     } else {
//       throw err;
//     }
//   });
// });
//#endregion

//#region  设置哪些接口不需要设置token
/**
 * secret 必须是token生成时的加密字符串
 * ubless 排除哪些请求不需要token 登录login与注册register 无需token
 */
// app.use(jwt({ secret: jwtScrite })
//   .unless({ path: [/^\/public/, /^\/users\/login/, /^\/users\/register/] }));
//#endregion

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
app.use(sms.routes(), sms.allowedMethods())
app.use(order.routes(), order.allowedMethods())

// const { createSign } = require('./utils')
// console.log(createSign(),'createSign');
// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
