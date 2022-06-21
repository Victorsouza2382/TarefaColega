const sequelize = require('sequelize');
const db = require('../db/conn');
const cliente = require('./clienteModel');
const vendedor = require('vendedor');
const vendedorcarro = require('./vendedorcarroModel');

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

veiculo.belongsTo(cliente, {
  constraint: true,
  foreingnKey: 'idcliente'

})

cliente.hasMany(veiculo, {
  foreingnKey: 'idcliente'

})

carro.belongsToMany(vendedor, {
  through: {
    model: vendedorcarro
  },
  foreingnKey: 'idcarro',
  constraint: true
})

vendedor.belongsToMany(carro, {
  through: {
    model: vendedorcarro
  },
  foreingnKey: 'idvendedor',
  constraint: true
})

carro.hasMany(vendedorcarro, { foreingnKey: 'idcarro' });
vendedorcarro.belongsTo(carro, { foreingnKey: 'idcarro' });
vendedor.hasMany(vendedorcarro, { foreingnKey: 'idvendedor' });
vendedorcarro.belongsTo(vendedor, { foreingnKey: 'idvendedor' });



module.exports = veiculo;