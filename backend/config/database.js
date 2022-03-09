const { Sequelize } = require('sequelize');

const db = new Sequelize('codegig', 'postgres', 'admin', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = db;
