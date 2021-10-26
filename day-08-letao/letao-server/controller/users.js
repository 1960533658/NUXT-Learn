const { register, findUserByUsername, findUserInfo } = require('../model/users')
// 引入joi
const Joi = require('joi')
//  引入加密方法
const { cryptoPaddword } = require("../utils")
// 加密字符串
const { scrict } = require('../config')

// 注册
module.exports.register = async (ctx) => {
  // 读取请求到的参数
  const { username, password, mobile } = ctx.request.body

  //#region  参数是否合法 不合法返回错误信息 并阻止🚫后续代码运行
  const schema = Joi.object({
    username: Joi.string().min(4).max(16).required(),
    password: Joi.string().pattern(/^[a-zA-Z0-9]{6,20}$/),
    repeat_password: Joi.ref('password'),
    mobile: Joi.string().pattern(/^1(3\d|4[5-9]|5[0-35-9]|6[2567]|7[0-8]|8\d|9[0-35-9])\d{8}$/)
  })

  const verify = schema.validate({ username, password, mobile })
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

  //#region  查询用户是否注册
  const user = await findUserByUsername(username)
  /* 如果已经注册过了就会返回数据 如果没有注册过就不会返回数据 */
  if (user[0]) {
    ctx.body = {
      status: 0,
      message: "当前用户名已经注册"
    }
    return
  }
  //#endregion


  // 操作 user数据模型
  const result = await register(username, cryptoPaddword(password, scrict), mobile);

  ctx.body = {
    status: 200,
    message: '注册成功',
  }
}

//#region  登录功能
module.exports.login = async (ctx) => {
  const { username, password } = ctx.request.body;
  // 在数据库中查询在用户信息数据库中是否存在         密码需要进行加密查询
  const result = await findUserInfo(username, cryptoPaddword(password, scrict))
  /* 如果有用户信息 */
  if (result[0]) {
    ctx.body = {
      status: 200,
      message: "登录成功"
    }
  } else {
    ctx.body = {
      status: 0,
      message: "登录失败 请检查用户名和密码是否正确"
    }
  }
}
//#endregion
