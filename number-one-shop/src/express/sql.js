var mysql = require('mysql');
var pool  = mysql.createPool({
  connectionLimit : 10,
  host            : 'localhost',
  user            : 'root',
  password        : '',
  database        : 'oneShop'
});
/**
 * 
 * @param {String} sql	数据库执行语句
 * @param {Object} options	参数
 * @param {Function} callback	回调函数
 */
var query = function (sql,options,callback) {
    pool.getConnection(function (err, connection) {
        if (err) throw err; // not connected!
        // Use the connection
        connection.query(sql, options,function (error, results, fields) {
            // When done with the connection, release it.
            connection.release();
            // Handle error after the release.
            if (error) throw error;
            // Don't use the connection here, it has been returned to the pool.
            //console.log(results);
            callback(results)
        });
    });
};
module.exports = {
    query: query
}