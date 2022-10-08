const redCombersation=require('../modelos/redCombersation.model')
const Combersations=require('../modelos/combersation.model')
const messages=require('../modelos/messeges.model')
const uuid=require('uuid')
const Users = require('../modelos/user.model')
const validation = require('../modelos/validation.model')

const CreateRED=async(data)=>{
    const users=await Users.findAll({
        where:{id:data.userId}
    })
    const comber=await Combersations.findAll({
        where:{id:data.combersationId}
    })
if(users.length===1){
    if(comber.length===1){
    const xp1 =await redCombersation.findAll({
        where:{userId:data.userId,combersationId:data.combersationId}
    })
if(xp1.length===0){
    const xp= await redCombersation.create({
       id:uuid.v4(),
       userId:data.userId,
       combersationId:data.combersationId
})
    return xp}
    else {return 400}}else {return 401}
}
else{return 401}

}

//? //////////////////////////////////////////////////////////////
const getMyRed=async(id)=>{
    const xp =await redCombersation.findAll({
        where:{userId:id},
        include:{model:Combersations},
    })
        
    return xp

}
//? //////////////////////////////////////////////////////////////
const GetCombersationByid=async(ide,idUser)=>{
    const auth=await redCombersation.findAll({
        where:{userId:idUser,combersationId:ide},
        include:{model:Combersations},
    })
   return auth
}
  
//? //////////////////////////////////////////////////////////////
const updateMyCombersation=async(ide,data,idUser)=>{
    
    const auth=await redCombersation.findAll({
        where:{userId:idUser,combersationId:ide},  
    })
    const comber=await Combersations.findAll({
        where:{id:ide},  
    })

   if(auth.length===1){
   const xp=await Combersations.update({tittle:data.tittle},{
    where:{id:ide}})
    const comberx=await Combersations.findAll({
        where:{id:ide},  
    })
    
    return comberx}
    else{return 401}

}
//? //////////////////////////////////////////////////////////////ADMIN
const deleteCombersation=async(idUser,ide,)=>{
       
    const auth=await redCombersation.findAll({
        where:{userId:idUser,combersationId:ide},
        
    })
    const xp=await redCombersation.findAll({
        where:{combersationId:ide}})
     
    if(auth.length===1){
        if(xp.length===1){
            const end=await Combersations.destroy({
                where:{id:ide}
            })
            const fin=await validation.destroy({
                where:{Red:ide}
            })
            const endTo=await redCombersation.destroy({
                where:{userId:idUser,combersationId:ide}
            })
            const entMes=await messages.destroy({
                where:{combersationId:ide}
            })

                return end
            }
            else{
                const endTo=await redCombersation.destroy({
                    where:{userId:idUser,combersationId:ide}
                })
                return endTo
            }
        }
    
    else{return auth}

        }

//? //////////////////////////////////////////////////////////////
const createValidation=async(data)=>{
    const xp= await validation.create({
        id:uuid.v4(),
        User1:data.User1,
        User2:data.User2,
        Red:data.Red
    })
}

const getValidation=async(idPrams,idUser)=>{
    const xp=await validation.findAll({
        where:{User1:idPrams,
            User2:idUser}
    })

if(xp.length===1){return false}
else{
    const xp1=await validation.findAll({
        where:{User1:idUser,
            User2:idPrams}
    })
    if(xp1.length===1){return false}
    else{return xp}
}

}

//? //////////////////////////////////////////////////////////////

module.exports={
    CreateRED,
    GetCombersationByid,
    deleteCombersation,
    updateMyCombersation,
    getMyRed,
    getValidation
 
}
