const sequelize = require('sequelize');
const db = require('../db/conn');

const cliente = db.define('cliente', {
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
  idade: {
    type: sequelize.NUMBER,
    allowNull: false
  },
  sexo: {
    type: sequelize.BOOLEAN,
    allowNull: false
  },
  endereco: {
    type: sequelize.STRING,
    allowNull: false
  }
});

module.exports = cliente