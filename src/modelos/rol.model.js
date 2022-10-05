const {DataTypes}=require('sequelize')
const {db}=require('../utils/DB')


const roles = db.define("roles", {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      allowNull: false,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  });
  
  module.exports = roles;


