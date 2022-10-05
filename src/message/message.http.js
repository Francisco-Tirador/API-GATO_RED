const controls=require('./message.controllers')

const newMessage=(req, res)=>{
const data=req.body
const idUser=req.user.id
const idParam=req.params.id
if(data.content){
    controls.CreateMessage(idUser,data,idParam)
    .then((response)=>{
        if(response===401){res.status(400).json({message:`this id  does not exist or is null`})}
        else{ res.status(201).json({message:'ALL OK GALACTIC MIAU',response})} 
    })
    .catch(err=>{
        if(!err.errors){res.status(400).json({message:`this id  does not exist`})}
        else{ res.status(400).json({err:err.errors[0].message})}
       
    })
}else{ 
    res.status(400).json({message:'mising data brou gatuno'})
}
}

const GETmyMessage=(req,res)=>{
    const id=req.params.id
    controls.getAllMessages(id)
    .then(response=>{
        if(response===null){res.status(400).json({message:`this id ${id} does not exist or is null`})}
       else{ res.status(200).json({length:response.length,messages:response})}
    })
    .catch(err=>{
        if(!err.errors){res.status(400).json({message:`this id ${id} does not exist`})}
       else{ res.status(400).json({err:err.errors[0].message})}
    })
}
//? //////////////////////////////////////////////////////////////
const deletedMessage=(req,res)=>{
    const id=req.params.id
    const idUser=req.user.id
    controls.deleteMessage(idUser,id)
    .then(response=>{
        if(response===null){res.status(400).json({message:`this id ${id} is null`})}
        else if(response===1){ res.status(200).json({message:`the message whit the id ${id} was deleted`,response})}
        else if(response===0){res.status(400).json({message:`this not is your RedCombersation`,response})}
        else {res.status(400).json({err:response})}
      })
    .catch(err=>{
        if(!err.errors){res.status(400).json({message:`this id ${id} does not exist`})}
        else{ res.status(400).json({err:err.errors[0].message})}
    })
}
//? //////////////////////////////////////////////////////////////

module.exports={
    GETmyMessage,
    newMessage,
    deletedMessage
}

