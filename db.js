const mysql = require("mysql2");
require("dotenv").config();

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10, // Adjust the limit based on your needs
  queueLimit: 0
});

db.getConnection((err, connection) => {
  if (err) {
    console.error("❌ Database connection failed:");
    console.error("Error Code:", err.code);
    console.error("Error Message:", err.sqlMessage);
    process.exit(1);
  } else {
    console.log("✅ Connected to MySQL Database");
    connection.release(); // Release the connection back to the pool
  }
});

module.exports = db;


