const { DataTypes } = require('sequelize');
const sequelize = require('../utils/db-connection');

const Booking = sequelize.define('Booking', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  user_id: { type: DataTypes.INTEGER, allowNull: false },
  bus_id: { type: DataTypes.INTEGER, allowNull: false },
  seat_count: { type: DataTypes.INTEGER, allowNull: false },
  booking_date: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
}, {
  tableName: 'bookings',
  timestamps: false,
});

module.exports = Booking;
