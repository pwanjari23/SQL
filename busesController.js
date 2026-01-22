const Bus = require('../models/Bus');

// Add new bus
exports.addBus = async (req, res) => {
  try {
    const bus = await Bus.create(req.body);
    res.status(201).json({ message: 'Bus added', bus });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get buses with available seats > specified number
exports.getAvailableBuses = async (req, res) => {
  try {
    const seats = parseInt(req.params.seats, 10);
    const buses = await Bus.findAll({
      where: {
        available_seats: { [require('sequelize').Op.gt]: seats },
      },
    });
    res.json(buses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
