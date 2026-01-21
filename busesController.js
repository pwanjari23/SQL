const db = require('../utils/db-connection');

// POST /buses
exports.addBus = (req, res) => {
    const { name, total_seats, available_seats } = req.body;

    const sql = `
        INSERT INTO buses (name, total_seats, available_seats)
        VALUES (?, ?, ?)
    `;

    db.query(sql, [name, total_seats, available_seats], (err, result) => {
        if (err) return res.status(500).json(err);

        res.status(201).json({
            message: 'Bus added successfully',
            busId: result.insertId
        });
    });
};

// GET /buses/available/:seats
exports.getAvailableBuses = (req, res) => {
    const seats = req.params.seats;

    const sql = `
        SELECT * FROM buses
        WHERE available_seats > ?
    `;

    db.query(sql, [seats], (err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
    });
};
