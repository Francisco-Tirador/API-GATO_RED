const {db}=require('../utils/DB')
const {DataTypes}=require('sequelize')


const messages=db.define('messeges',{
    id:{
        primaryKey:true,
        allowNull:false,
        type:DataTypes.UUID
    },
    content:{
        allowNull:false,
        type:DataTypes.TEXT,
    },
    img:{
        type:DataTypes.STRING,
    },
   
    combersationId:{
        allowNull:false,
        type:DataTypes.UUID
    },
    userId:{
        allowNull:false,
        type:DataTypes.UUID
    }
})

module.exports=messages
