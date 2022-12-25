var mysql = require("mysql2");

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  port     :  3306,
  database : 'my_db'
});

// TODO 打包 connect 在每次 query 的時候連接資料庫，然後取得資料之後再結束連線

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});

connection.end();