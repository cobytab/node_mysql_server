var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "my_first_db",
});

connection.connect((err) => {
  if (err) {
    console.error("An error occurred: " + err);
    return;
  }

  console.log("Mysql db connected successfully");
});

module.exports = { connection };
