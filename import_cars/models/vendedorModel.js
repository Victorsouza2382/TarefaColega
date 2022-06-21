const sequelize = require('sequelize');
const db = require('../db/conn');

const vendedor = db.define('vendedor', {
  id: {
    type: sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  nome: {
    type: sequelize.STRING,
    allowNull: false
  },
  sexo: {
    type: sequelize.BOOLEAN,
    allowNull: false
  }
});

module.export = vendedor;