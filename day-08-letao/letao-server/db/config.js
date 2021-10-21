module.exports.config = {
  dev: {
    connectionLimit: 10, // 最大连接数
    host: 'localhost', // 127.0.0.1 主机域名
    user: 'root', // 用户名
    password: 'root', // 密码
    database: 'letao' // 连接的 表 名称
  },
  uat: {
    connectionLimit: 10, // 最大连接数
    host: 'localhost', // 127.0.0.1 主机域名
    user: 'root', // 用户名
    password: 'root', // 密码
    database: 'letao' // 连接的 表 名称
  },
  prd: {
    connectionLimit: 10, // 最大连接数
    host: 'localhost', // 127.0.0.1 主机域名
    user: 'root', // 用户名
    password: 'root', // 密码
    database: 'letao' // 连接的 表 名称
  }
}
