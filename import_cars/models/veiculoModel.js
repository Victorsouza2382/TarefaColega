const sequelize = require('sequelize');
const db = require('../db/conn');
const cliente = require('./clienteModel');

const veiculo = db.define('veiculos', {
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
  modelo: {
    type: sequelize.STRING,
    allowNull: false
  },
  marca: {
    type: sequelize.STRING,
    allowNull: false
  },
  ano_fab: {
    type: sequelize.DATE,
    allowNull: false
  }
});

module.exports = veiculo

veiculo.belongsTo(cliente, {
  constraint: true,
  foreingnKey: 'idcliente'

})


cliente.hasMany(veiculo, {
  foreingnKey: 'idcliente'

})