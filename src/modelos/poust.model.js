const {db}=require('../utils/DB')
const {DataTypes}=require('sequelize')


const Poust=db.define('Pousts',{
    id:{
        primaryKey:true,
        allowNull:false,
        type:DataTypes.UUID
    },
    Public:{
        allowNull:false,
        type:DataTypes.BOOLEAN,
        defaultValue:true
    },
    userId:{
        allowNull:false,
        type:DataTypes.UUID,
       
    },
    description:{
        type:DataTypes.TEXT(500)
    },
    tittle:{
        type:DataTypes.STRING(50),
        allowNull:false,
    },
    content:{
        type:DataTypes.TEXT,
    },
    img:{
        type:DataTypes.STRING,
       
    }

})

module.exports=Poust