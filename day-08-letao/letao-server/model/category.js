// 分类页面 数据模型

const { query } = require("../db/query");

//#region  一级分类数据层
module.exports.onecategory = async () => {
  return await query('select * from category')
}
//#endregion


//#region  二级分类数据层
module.exports.twoCategory = async (id) => {
  return await query('select * from brand where id = ?', [id])
}
//#endregion

