const { onecategory, twoCategory} = require('../model/category')
// 一级分类 的 业务处理逻辑
module.exports.oneCategory = async (ctx) => {
  const result = await onecategory()
  
  ctx.body = {
    status: 200,
    oneCategory: result
  }
}

// 二级分类 业务逻辑处理
module.exports.twoCategory = async (ctx) => {
  // 请求参数获取id (你点击了 一级分类商品中具体的一件商品 获取到了id)

  const { id } = ctx.request.query;
  console.log(id,"id")
  const result = await twoCategory(id)
  ctx.body = {
    status: 200,
    twoCategory: result
  }
}