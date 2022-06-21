const sequelize = require('sequelize');
const db = require('../db/conn');

const vendedorcarro = db.define('vendedorcarro', {
  id: {
    type: sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  }
});

module.export = vendedorcarro;