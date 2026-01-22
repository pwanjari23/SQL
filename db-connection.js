const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('testdb', 'root', 'SQL@2026', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false,
});

module.exports = sequelize;
