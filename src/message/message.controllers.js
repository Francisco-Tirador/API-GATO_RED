const messages=require('../modelos/messeges.model')
const User=require('../modelos/user.model')
const uuid=require('uuid')
const Combersations = require('../modelos/combersation.model')

const CreateMessage=async(ide,data,idComber)=>{
    const users=await User.findAll({
        where:{id:ide}
    })
    const comber=await Combersations.findAll({
        where:{id:idComber}
    })
if(users.length===1){
    if(comber.length===1){
        const xp= await messages.create({
            id:uuid.v4(),
            content:data.content,
            img:data.img,
            combersationId:idComber,
            userId:ide
    })
        return xp}else{return 401}
    }else{return 401}
}

//? //////////////////////////////////////////////////////////////
  

const getAllMessages=async(id)=>{
    const xp=await messages.findAll({
        where:{combersationId:id}
    })
    
    return xp
}

//? //////////////////////////////////////////////////////////////ADMIN
const deleteMessage=async(idUser,ide,)=>{
    const xp=await messages.destroy({
        where:{userId:idUser,id:ide}
    })
    return xp
}

//? //////////////////////////////////////////////////////////////

module.exports={
   CreateMessage,
   getAllMessages,
   deleteMessage
}
