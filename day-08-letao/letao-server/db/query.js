var mysql = require('mysql');
const { config } = require('./config')

// 配置信息
const dbConfig = config[process.env.DB_ENV]
// 连接数据库配置信息
var pool = mysql.createPool(dbConfig);
// 创建连接
/**
 * 在数据库中执行的sql语句
 * @param {string} sql 传入sql语句
 */
module.exports.query = (sql, values) => {
  return new Promise(function (resolve,reject) {
    pool.getConnection(function (err, connection) {
      if (err) throw err; // not connected! 测试是否连接上数据库

      // Use the connection 发送sql语句到数据库letao中执行
      // 执行结果将会咋参数二中返回 -- result
      connection.query(sql,values, function (error, results, fields) {
        // When done with the connection, release it. 每当拿到数据库返回的数据之后 会释放当前连接
        connection.release();
        // Handle error after the release. 抛出异常
        if (error) throw error;

        // if之后的代码 在没有异常抛出的时候就会执行
        resolve(results)
        // console.log(results, 'result') // RowDataPacket { '结果': 2 } ] result

      });
    });
  })
}