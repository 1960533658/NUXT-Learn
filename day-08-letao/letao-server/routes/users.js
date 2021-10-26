const router = require('koa-router')()
const {register, login} = require('../controller/users')
router.prefix('/users')
// 挂载--注册功能
router.post('/register',register)
// 挂载--登录功能
router.post('/login', login)
module.exports = router
