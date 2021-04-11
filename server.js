const express = require("express");
const app = express();
const port = 3000;

// db
const mysqldb = require("./db").connection;

// Form data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/add", (req, res) => {
  const details = req.body;
  mysqldb.query("INSERT INTO students SET ?", details, (error, results) => {
    if (error) throw error;
    res.json(results);
  });
});

app.get("/data/:searchId", (req, res) => {
  const { searchId } = req.params;
  mysqldb.query(
    "SELECT * FROM students WHERE id = ?",
    searchId,
    (error, results) => {
      if (error) throw error;
      res.json(results);
    }
  );
});

app.get("/data", (req, res) => {
  mysqldb.query("SELECT * FROM students", (error, results) => {
    if (error) throw error;
    res.json(results);
  });
});

app.get("/", (req, res) => {
  res.send("Hello World! It's a test server");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
