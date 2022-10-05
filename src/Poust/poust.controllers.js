const Poust=require('../modelos/poust.model')
const uuid=require('uuid')
const users = require('../modelos/user.model')

const CreatePoust=async(id,data)=>{

    const xp= await Poust.create({
       ...data,
       id:uuid.v4(),
       userId:id
})
    return xp
}
//? //////////////////////////////////////////////////////////////
const getAllPoust=async()=>{
    const xp=await Poust.findAll({
        include:{model:users,
            attributes:{
                exclude:["id", "roleId","age","emeil","password","isActive","isVerified","createdAt"]
            }
            }
    })
    return xp
}
//? //////////////////////////////////////////////////////////////
const getMypoustbyID=async(id)=>{
    const xp=await Poust.findAll({
        where:{userId:id},
        include:{model:users,
        attributes:{
            exclude:["id", "roleId","age","emeil","password","isActive","isVerified","createdAt"]
        }
        }
    })
   
    return xp
}
//? //////////////////////////////////////////////////////////////
const PoustbyID=async(id)=>{
    const xp=await Poust.findAll({
        where:{id},
        include:{model:users,
            attributes:{
                exclude:["id", "roleId","age","emeil","password","isActive","isVerified","createdAt"]
            }
            }
    })
   
    return xp
}
//? //////////////////////////////////////////////////////////////
const updateMyPouest=async(ide,data,idUser)=>{
    const {id,UserId,...resDATA}=data
    const xp=await Poust.update(resDATA,{
         where:{user_id:idUser,id:ide},
})

if(xp[0]===1){
    const PoustXP=await Poust.findOne({
        where:{id:ide}
    })
    return PoustXP}else{
        return xp}
}
//? //////////////////////////////////////////////////////////////ADMIN
const deletePoust=async(idUser,ide,)=>{
    if(idUser==='2c7809f3-967b-46b7-a027-56c630d6a7f0'){
    const xp=await Poust.destroy({
        where:{id:ide}
    })
    if(xp===0){
        const PoustXP=await Poust.findOne({
            where:{id:ide}
        })
        return PoustXP}else{
            return xp}
    
}
    
  else{
        
        const xp=await Poust.destroy({
            where:{id:ide,UserId:idUser}
        })
        console.log(xp)
        if(xp===0){
            const PoustXP=await Poust.findOne({
                where:{id:ide}
            })
            return PoustXP}else{
                return xp}
        }
}

//? //////////////////////////////////////////////////////////////

module.exports={
    CreatePoust,
    PoustbyID,
    getAllPoust,
    deletePoust,
    updateMyPouest,
    getMypoustbyID
}
