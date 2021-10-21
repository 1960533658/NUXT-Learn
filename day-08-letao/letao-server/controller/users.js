const { register } = require('../model/users')
// 引入joi
const Joi = require('joi')
module.exports.register = async (ctx) => {
  // 读取请求到的参数
  const { username, password, mobile } = ctx.request.body
  
  //#region  参数是否合法 不合法返回错误信息 并阻止🚫后续代码运行
  const schema = Joi.object({
    username: Joi.string().min(4).max(16).required(),
    password: Joi.string().pattern(/^[a-zA-Z0-9]{6-16}$/),
    repeat_password: Joi.ref('password'),
    mobile: Joi.string().pattern(/^1(3\d|4[5-9]|5[0-35-9]|6[2567]|7[0-8]|8\d|9[0-35-9])\d{8}$/)
  })

  const verify = schema.validate({ username, password, mobile})
  console.log(verify);
  // 如果校验不通过 则阻止程序运行
  if (verify.error) {
    ctx.body = {
      status: 0,
      message: verify.error.details[0].message
    }
    return 
  }
  //#endregion
  
  
  // 操作 user数据模型
  const result = await register(username, password, mobile);
  
  ctx.body = {
    status: 200,
    msg: '注册成功',
  }
}