var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '1234567890',
  database : 'suit_test'
});
module.exports = connection;