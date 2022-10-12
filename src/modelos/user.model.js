const {DataTypes}=require('sequelize')
const {db}=require('../utils/DB')
const Roles = require('./rol.model')



const users=db.define('users',{
    id:{
        primaryKey:true,
        type:DataTypes.UUID,
        allowNull:false
    },
    roleId: {
        allowNull: false,
        type: DataTypes.UUID
      },
      imgPerfil:{
        type:DataTypes.STRING
      },
      color1:{
        type:DataTypes.STRING
      },
      color2:{
        type:DataTypes.STRING
      },
    name:{
        allowNull:false,
        type:DataTypes.STRING(35)
    },
    age:{ 
        allowNull:false,
        type:DataTypes.INTEGER,
    },
    emeil:{
        allowNull:false,
        type:DataTypes.STRING,
        unique:true,
        validate:{isEmail:true}
    },
    password:{
        allowNull:false,
        type:DataTypes.STRING
    },
    isActive:{
        allowNull:false,
        type:DataTypes.BOOLEAN,
        defaultValue:true,
        field:'is_active'
    },
    isVerified:{
        allowNull:false,
        type:DataTypes.BOOLEAN,
        defaultValue:false,
        field:'is_verified'
    }
})

module.exports=users
