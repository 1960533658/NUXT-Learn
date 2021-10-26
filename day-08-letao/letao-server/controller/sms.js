// 引入公共方法 调用腾讯云短信 接口
const { sendsms, getRandomByLength } = require('../utils')
module.exports.sendsms = async (ctx ) => {
  // 短信验证码
  const code = getRandomByLength(6)
  // 解析传递的手机号
  const { mobile} = ctx.request.body
  const result = await sendsms(mobile, code)
  // 如果短信验证 发送短信成功
  if (result.SendStatusSet[0].Code ==="Ok")
  ctx.body = {
    status: 200,
    code,
    message: "短信发送成功"
  }
}