const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "SQL@2026",
  database: "testDB",
});

connection.connect((err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Connection has been created");

  const creationQuery = `CREATE TABLE IF NOT EXISTS Students(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    email VARCHAR(50)
  )`;

  connection.execute(creationQuery, (err) => {
    if (err) {
      console.log(err);
      connection.end();
      return;
    }
    console.log("Table is created");

    const alterQuery = `
      ALTER TABLE Students
      MODIFY COLUMN name VARCHAR(100),
      MODIFY COLUMN email VARCHAR(100)
    `;

    connection.execute(alterQuery, (err) => {
      if (err) {
        console.log(err.message);
      } else {
        console.log("Table columns altered to VARCHAR(100)");
      }
    });
  });
});

module.exports = connection;
