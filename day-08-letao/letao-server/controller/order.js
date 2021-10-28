const { createOrder, getTrade_no, getRandomStr } = require("../utils")
// 引入 appid 商户订单号 随机字符串
const { appid, mch_id, notify_url,orderUrl } = require('../config/wx')
// 引入签名算法
const { createSign } = require('../utils')
// 引入qrcode库
const QRCode = require('qrcode')
// 微信下单
module.exports.order = async ctx => {
  // 前端 调用下单接口时 传递的参数
  const { body, total_fee, trade_type, spbill_create_ip } = ctx.request.body
  // 微信下单必须参数
  const params = {
    appid, // app id
    mch_id, // 商户号id
    nonce_str: getRandomStr(), // 32位以内的随机字符串
    body, // 商品描述
    out_trade_no: getTrade_no(), // 商户订单号
    total_fee, // 商品标价
    spbill_create_ip, // 商户终端ip
    notify_url, // 微信服务器回调的地址
    trade_type, // 支付类型
  }
  // 生成签名
  const sign = createSign(params)
  console.log(sign)
  // 新增sign属性  签名属性根据appid 和商户订单号生成
  params.sign = sign

  let sendData = `
    <xml>
      <appid>${appid}</appid>
      <body>${body}</body>
      <mch_id>${mch_id}</mch_id>
      <nonce_str>${params.nonce_str}</nonce_str>
      <notify_url>${notify_url}</notify_url>
      <out_trade_no>${params.out_trade_no}</out_trade_no>
      <spbill_create_ip>${spbill_create_ip}</spbill_create_ip>
      <total_fee>${total_fee}</total_fee>
      <trade_type>${trade_type}</trade_type>
      <sign>${sign}</sign>
    </xml>
  `
  const data = await createOrder(orderUrl, sendData)
  // 下单成功 转码图片地址为base64格式
  const { return_code, result_code, return_msg,code_url } = data
  if (return_code == "SUCCESS" && result_code == "SUCCESS" && return_msg == "OK") {
    data.payUrl = await QRCode.toDataURL(code_url)
  } 
  ctx.body = {
    status: 200,
    data
  }
}