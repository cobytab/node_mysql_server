var mysql = require("mysql");

// connection credentials
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "my_first_db",
});

// Establish connection
connection.connect((err) => {
  if (err) {
    console.error("An error occurred: " + err);
    return;
  }

  console.log("Mysql db connected successfully");
});

module.exports = { connection };
