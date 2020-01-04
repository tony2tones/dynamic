const Sequelize = require('sequelize');

const sequelize = new Sequelize('tony.node', 'root', 'Celine12#45', {
  dialect: 'mysql',
  host: 'localhost'
});


module.exports = sequelize;
