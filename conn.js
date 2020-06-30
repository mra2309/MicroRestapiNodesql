var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "apiexpress"

  // host: "dev.nutacloud.com",
  // user: "tes",
  // password: "tes",
  // database: "nutacloud"

});

con.connect(function (err){
    if(err) throw err;
});

module.exports = con;