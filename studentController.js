const db = require("../utils/db-connection");

const addEntries = (req, res) => {
  const { email, name } = req.body;

  if (!name || !email) {
    return res.status(400).send("Name and Email are required");
  }

  const insertQuery = "INSERT INTO students (name, email) VALUES (?, ?)";

  db.execute(insertQuery, [name, email], (err) => {
    if (err) {
      console.log(err.message);
      return res.status(500).send(err.message);
    }
    console.log("Values have been inserted");
    res.status(200).send(`Student with name ${name} successfully added`);
  });
};

const updateEntry = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const { email } = req.body;
  const updateQuery = "UPDATE students SET email=? ,name = ? WHERE id = ?";

  db.execute(updateQuery, [email, name, id], (err, result) => {
    if (err) {
      console.log(err.message);
      return res.status(500).send(err.message);
    }
    if (result.affectedRows === 0) {
      return res.status(404).send("Student not found");
    }
    res.status(200).send("User has been updated");
  });
};

const deleteEntry = (req, res) => {
  const { id } = req.params;
  const deleteQuery = `DELETE FROM students WHERE id=?`;

  db.execute(deleteQuery, [id], (err, result) => {
    if (err) {
      console.log(err.message);
      res.status(500).send(err.message);
    }
    if (result.affectedRows === 0) {
      return res.status(500).send("Student not found");
    }
    res.status(200).send("User with ${id} is deleted");
  });
};

module.exports = {
  addEntries,
  updateEntry,
  deleteEntry,
};
