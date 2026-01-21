const db = require('../utils/db-connection');

// POST /users
exports.addUser = (req, res) => {
    const { name, email, phone } = req.body;

    const sql = `INSERT INTO users (name, email, phone) VALUES (?, ?, ?)`;

    db.query(sql, [name, email, phone], (err, result) => {
        if (err) return res.status(500).json(err);

        res.status(201).json({
            message: 'User added successfully',
            userId: result.insertId
        });
    });
};

// GET /users
exports.getUsers = (req, res) => {
    const sql = `SELECT * FROM users`;

    db.query(sql, (err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
    });
};
