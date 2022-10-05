const Combersation=require('../modelos/combersation.model')
const uuid=require('uuid')
const messages = require('../modelos/messeges.model')

const CreateCombersation=async(data)=>{

    const xp= await Combersation.create({
       id:uuid.v4(),
       tittle:data.tittle,
})

    return xp
}

//? //////////////////////////////////////////////////////////////
const getMyCombersation=async(id)=>{
    const xp =await Combersation.findAll({
        where:{id:id},
        include:{model:messages},
    })
        
    return xp

}
 
//? //////////////////////////////////////////////////////////////

module.exports={
  CreateCombersation,
  getMyCombersation
 
}
