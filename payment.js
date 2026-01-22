const { DataTypes } = require('sequelize');
const sequelize = require('../utils/db-connection');

const Payment = sequelize.define('Payment', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  booking_id: { type: DataTypes.INTEGER, allowNull: false },
  amount: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
  payment_date: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  status: { type: DataTypes.STRING, allowNull: false },
}, {
  tableName: 'payments',
  timestamps: false,
});

module.exports = Payment;
