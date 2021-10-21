const router = require('koa-router')()
const {register} = require('../controller/users')
router.prefix('/users')
router.post('/register',register)

module.exports = router
