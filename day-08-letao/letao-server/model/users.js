const { query } = require('../db/query')
// 用户注册
module.exports.register = async (username, password, mobile) => {
  return  await query(`insert into user (username, password, mobile)
  values ("${username}","${password}","${mobile}")`)
}

//#region  用户查询是否存在
module.exports.findUserByUsername = async (username) => {
  return await query(`select * from user where username = ?`, username);
}
//#endregion

//#region  用户登录查询是否存在信息数据
module.exports.findUserInfo = async (username, password) => {
  return await query("select * from user where username = ? and password = ?", [username,password])
}
//#endregion
