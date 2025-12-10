const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MySQL Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Jesus@2019",
  database: "bible_school",
});

// Test DB Connection
db.connect((err) => {
  if (err) {
    console.error("MySQL connection error:", err);
    return;
  }
  console.log("Connected to MySQL Database!");
});

// API ROUTE: Receive subscription
app.post("/api/subscribe", (req, res) => {
  const { fullName, email, phone, dob, gender, country, program } = req.body;

  const sql = `
        INSERT INTO subscribers 
        (fullName, email, phone, dob, gender, country, program)
        VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

  const values = [fullName, email, phone, dob, gender, country, program];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("Insert error:", err);
      return res.status(500).json({ error: "Database error" });
    }

    res.json({ message: "Subscription saved successfully!" });
  });
});

// Start server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
