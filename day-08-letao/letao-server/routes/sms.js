const router = require("koa-router")();
// * 导入控制层 的 sendsms 方法
const { sendsms } = require("../controller/sms");

// 发送短信接口
router.post('/sendsms', sendsms)
module.exports = router;