const express = require("express");
const mysql = require("mysql2");

const app = express();

// MySQL connection
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "SQL@2026",
  database: "testDB",
});

connection.connect((err) => {
  if (err) {
    console.log("Database connection failed:", err);
    return;
  }

  console.log("Connection has been created");

  // Students table
  const studentsTable = `
    CREATE TABLE IF NOT EXISTS Students (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(20),
      email VARCHAR(20)
    )
  `;

  // Users table
  const usersTable = `
    CREATE TABLE IF NOT EXISTS Users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255),
      email VARCHAR(255)
    )
  `;

  // Buses table
  const busesTable = `
    CREATE TABLE IF NOT EXISTS Buses (
      id INT AUTO_INCREMENT PRIMARY KEY,
      busNumber VARCHAR(50),
      totalSeats INT,
      availableSeats INT
    )
  `;

  // Bookings table
  const bookingsTable = `
    CREATE TABLE IF NOT EXISTS Bookings (
      id INT AUTO_INCREMENT PRIMARY KEY,
      seatNumber INT
    )
  `;

  // Payments table
  const paymentsTable = `
    CREATE TABLE IF NOT EXISTS Payments (
      id INT AUTO_INCREMENT PRIMARY KEY,
      amountPaid DECIMAL(10,2),
      paymentStatus VARCHAR(50)
    )
  `;

  // Execute queries one by one
  connection.execute(studentsTable);
  connection.execute(usersTable);
  connection.execute(busesTable);
  connection.execute(bookingsTable);
  connection.execute(paymentsTable);

  console.log("All tables created or already exist");
});

app.get("/", (req, res) => {
  res.send("Bus Booking System API is running");
});

app.listen(3000, () => {
  console.log("Server is running");
});
