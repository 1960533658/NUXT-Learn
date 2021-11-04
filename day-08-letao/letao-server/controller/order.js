const { createOrder, getTrade_no, getRandomStr, queryOrder } = require("../utils")
// 引入 appid 商户订单号 随机字符串
const { appid, mch_id, notify_url, orderUrl,queryOrderUrl } = require('../config/wx')
// 引入签名算法
const { createSign } = require('../utils')
// 引入qrcode库
const QRCode = require('qrcode')
const { query } = require("../db/query")

// 公共字符串
let nonce_str = getRandomStr() // 随机字符串
let out_trade_no = getTrade_no()// 商户订单号
// 微信下单
module.exports.order = async ctx => {
  // 前端 调用下单接口时 传递的参数
  const { body, total_fee, trade_type, spbill_create_ip } = ctx.request.body
  nonce_str = getRandomStr()
  out_trade_no = getTrade_no()
  // 微信下单必须参数
  const params = {
    appid, // app id
    mch_id, // 商户号id
    nonce_str: nonce_str, // 32位以内的随机字符串
    body, // 商品描述
    out_trade_no: out_trade_no, // 商户订单号
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
  const { return_code, result_code, return_msg, code_url } = data
  if (return_code == "SUCCESS" && result_code == "SUCCESS" && return_msg == "OK") {
    data.payUrl = await QRCode.toDataURL(code_url)
  }
  ctx.body = {
    status: 200,
    data
  }
}


//#region  微信下单回调通知
module.exports.notify = async (ctx) => {
  // 打印微信服务器回调你的接口时的请求报文
  console.log(ctx.request.body.xml)
  const {
    appid,
    bank_type,
    cash_fee,
    fee_type,
    is_subscribe,
    mch_id,
    nonce_str,
    openid,
    out_trade_no,
    sign,
    time_end,
    total_fee,
    trade_type,
    transaction_id
  } = ctx.request.body.xml
  // 查询是否存在此订单
  const data = await query(`select * from payorder where out_trade_no = "${out_trade_no}"`)
  // 如果数据库中存在此条订单数据 就终止后续插入数据库语法代码执行
  if (data.length) return;
  // 插入数据库
  const result = await query(`insert into payorder(appid, bank_type,cash_fee,fee_type,is_subscribe,mch_id,nonce_str,openid,out_trade_no,sign,time_end,total_fee,trade_type,transaction_id) values('${appid}','${bank_type}','${cash_fee}','${fee_type}','${is_subscribe}','${mch_id}','${nonce_str}','${openid}','${out_trade_no}','${sign}','${time_end}','${total_fee}','${trade_type}','${transaction_id}')`);

  // 相应微信服务器接口 订单处理成功 无需重复通知
  ctx.body = `
  <xml>
    <return_code><![CDATA[SUCCESS]]></return_code>
    <return_msg><![CDATA[OK]]></return_msg>
  </xml>
  `
}
//#endregion

//#region  微信订单查询
module.exports.queryOrder = async (ctx) => {
  // 保证下单和查询的时候nonce_str、out_trade_no是同一个
  const { nonce_str, out_trade_no } = commonParams
  const params = {
    appid,
    mch_id,
    nonce_str,
    out_trade_no,
    sign
  }
  // 生成签名
  let sign = createSign(params);
  let sendData = `
  <xml>
    <appid>${appid}</appid>
    <mch_id>${mch_id}</mch_id>
    <nonce_str>${nonce_str}</nonce_str>
    <out_trade_no>${out_trade_no}</out_trade_no>
    <sign>${sign}</sign>
  </xml>
  `

  const data = await queryOrder(queryOrderUrl,sendData)
  ctx.body = {
    status: 200,
    data
  }
}
//#endregion

