const Users=require('../modelos/user.model')
const uuid=require('uuid')
const Roles=require('../modelos/rol.model')
const { hasheoPassword } = require('../utils/paswordHASHEO')
const Poust = require('../modelos/poust.model')
const redCombersation = require('../modelos/redCombersation.model')
const combersations = require('../modelos/combersation.model')
const validation = require('../modelos/validation.model')

const CreateUser=async(data)=>{
    const total=await Users.findAll()
    const xp= await Users.create({
        name:data.name,
        age:data.age,
        emeil:data.emeil,
        color1:data.color1,
        color2:data.color2,
        id:uuid.v4(),
        password:hasheoPassword(data.password),
        is_active:true,
        is_verified:false,
        roleId:total.length===0?'2c7809f3-967b-46b7-a027-56c630d6a7f0':'6156ce28-c840-42a4-b3cf-0ae836a8bb36'
    })
    return xp
}
//? //////////////////////////////////////////////////////////////
const getUsers=async()=>{
    const xp=await Users.findAll()
    return xp
}
//? //////////////////////////////////////////////////////////////
const getUserbyID=async(ide)=>{
    const data = await Users.findOne({
        where: {
          id:ide,
        },
        include:[{
          model: Roles,
          attributes:{
         exclude:['id',"createdAt","updatedAt"]   
        }
         },
        {model:Poust},
        {model:redCombersation}
        ],
       attributes:{
        exclude:['roleId',"password"]
       }
      });
      return data;
    }
//? //////////////////////////////////////////////////////////////
const updateMyUser=async(ide,data)=>{
    const {password,RoleId,id,is_active,is_verified,...resDATA}=data
    const xp=await Users.update(resDATA, {
         where:{id:ide}}
    )
    
    return xp
}
//? //////////////////////////////////////////////////////////////ADMIN
const deleteUser=async(ide)=>{
    const UserXP=await Users.findOne({
        where:{id:ide}
    })
    const xp=await Users.destroy({
        where:{id:ide}
    })
   const xp2=await Poust.destroy({
   where:{ userId:ide}
   })
   const xp3=await redCombersation.destroy({
    where:{userId:ide}
   })
   const xp4=await validation.destroy({
    where:{User1:ide}
   })
   const xp5=await validation.destroy({
    where:{User2:ide}
   })

    return UserXP
}
//? //////////////////////////////////////////////////////////////ADMIN
const otorgarADNMIN=async(ide,data)=>{

    const xp=await Users.update({RoleId:data.RoleId}, {
         where:{id:ide}}
    )
    const UserXP=await Users.findOne({
        where:{id:ide}
    })
    return UserXP
}
//? //////////////////////////////////////////////////////////////
const getEmeil=async(emeil)=>{
    const xp=await Users.findOne({
        where:{emeil}
    })
    return xp
}
//? //////////////////////////////////////////////////////////////

module.exports={
    CreateUser,
    getUsers,
    getUserbyID,
    updateMyUser,
    deleteUser,
    otorgarADNMIN,
    getEmeil
}
