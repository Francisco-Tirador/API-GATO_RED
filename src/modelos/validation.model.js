const {DataTypes}=require('sequelize')
const {db}=require('../utils/DB')


const validation=db.define('validations',{

    id:{
        primaryKey:true,
        type:DataTypes.UUID,
        allowNull:false
    },
    User1:{
        type:DataTypes.UUID,
        allowNull:false
    },
    User2:{
        type:DataTypes.UUID,
        allowNull:false
    }
  

})

module.exports=validation