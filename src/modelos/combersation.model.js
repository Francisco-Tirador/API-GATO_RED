const {db}=require('../utils/DB')
const {DataTypes}=require('sequelize')

const combersations=db.define('combersations',{
    id:{
        primaryKey:true,
        type:DataTypes.UUID,
        allowNull:false
    },
    tittle:{
        allowNull:false,
        type:DataTypes.STRING
    },

})

module.exports=combersations