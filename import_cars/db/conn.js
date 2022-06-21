const Sequelize =require('sequelize');
const sequelize = new Sequelize('import_cars','root','',{
    dialect:'mysql',
    host:'localhost',
    port:3306
});
try {
    sequelize.authenticate()
    console.log('Conectamos com o Sequelize!')
  } catch (error) {
    console.error('Não foi possível conectar:', error)
  };

module.exports = sequelize;