const router = require('koa-router')()
// 导入首页宫格数据的controller（业务逻辑控制）
const { grandList, swiperList, sportList } = require('../controller/index')

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: '乐淘-server'
  })
})

//#region  首页宫格数据
router.get('/grandlist', grandList )
//#endregion

//#region  首页轮播图数据
router.get('/swiper', swiperList)
//#endregion

//#region  首页运动专区数据
router.get('/sport', sportList)
//#endregion



module.exports = router
