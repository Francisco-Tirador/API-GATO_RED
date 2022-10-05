const {db}=require('../utils/DB')
const {DataTypes}=require('sequelize')


const redCombersation=db.define('redCombersations',{
    id:{
        primaryKey:true,
        allowNull:false,
        type:DataTypes.UUID
    },
    combersationId:{
        type:DataTypes.UUID,
        
    },
    userId:{
        type:DataTypes.UUID,
        allowNull:false,
        
    }
})

module.exports=redCombersation