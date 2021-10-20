// 进行首页中的业务控制

//#region  宫格中的业务逻辑 控制
module.exports.grandList = async (ctx, next) => {
  ctx.body = {
    status: 200,
    grandList: [
      { id: 1, img_src: "/images/nav1.png" },
      { id: 2, img_src: "/images/nav2.png" },
      { id: 3, img_src: "/images/nav3.png" },
      { id: 4, img_src: "/images/nav4.png" },
      { id: 5, img_src: "/images/nav5.png" }
    ]
  }
}
//#endregion


//#region  首页轮播图业务逻辑控制
module.exports.swiperList = async ctx => {
  ctx.body = {
    status: 200,
    swiperList: [
      { id: 1, img_src: "/images/swiper1.png" },
      { id: 2, img_src: "/images/swiper2.png" },
      { id: 3, img_src: "/images/swiper3.png" },
      { id: 4, img_src: "/images/swiper4.png" },
      { id: 5, img_src: "/images/swiper5.png" }
    ]
  }
}
//#endregion

//#region  首页运动专区 业务逻辑控制
module.exports.sportList = async ctx => {
  ctx.body = {
    status: 200,
    sportList: [
      {
        name: 'adidas阿迪达斯 男士 场下休闲篮球鞋s83700',
        img: '/images/product.jpg',
        price: 1.00,
        oldPrice: 888.00
      },
      {
        name: 'FORUM 84 LOW 新款低帮篮球鞋',
        img: '/images/product.jpg',
        price: 1.00,
        oldPrice: 899.00
      },
      {
        name: 'adidas阿迪达斯 男士 场下休闲篮球鞋s83700',
        img: '/images/product.jpg',
        price: 1.00,
        oldPrice: 888.00
      },
      {
        name: 'adidas阿迪达斯 男士 场下休闲篮球鞋s83700',
        img: '/images/product.jpg',
        price: 1.00,
        oldPrice: 888.00
      }
    ]
  }
}
//#endregion
