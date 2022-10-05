const controls=require('./poust.controllers')

const newPoust=(req, res)=>{
const data=req.body
const id=req.user.id
if(data.tittle&&data.content){ 
    controls.CreatePoust(id,data)
    .then((response)=>{
        if(response===null){res.status(400).json({message:`this id ${id} does not exist or is null`})}
        else{ res.status(201).json({message:'ALL OK GALACTIC MIAU',response})}
})    
    .catch(err=>{
        if(!err.errors){res.status(400).json({message:`this id ${id} does not exist`})}
        else{ res.status(400).json({err:err.errors[0].message})}
    })
}else{
    res.status(400).json({message:'mising data brou gatuno'})
}
}


//? //////////////////////////////////////////////////////////////
const GETallPoust=(req,res)=>{
    controls.getAllPoust() 
    .then(response=>{
        res.status(200).json({length:response.length,Poust:response})
    })
}
//? //////////////////////////////////////////////////////////////
const GETpoustID=(req,res)=>{
    const id=req.params.id
    controls.PoustbyID(id)
    .then(response=>{
        if(response===null){res.status(400).json({message:`this id ${id} does not exist or is null`})}
       else{ res.status(200).json({Poust:response})}
    })
    .catch(err=>{
        if(!err.errors){res.status(400).json({message:`this id ${id} does not exist`})}
       else{ res.status(400).json({err:err.errors[0].message})}
    })
}
//? //////////////////////////////////////////////////////////////
const GETmyPoust=(req,res)=>{
    const id =req.user.id
    controls.getMypoustbyID(id)
    .then(response=>{
        if(response===null){res.status(400).json({message:`this id ${id} does not exist or is null`})}
       else{ res.status(200).json({length:response.length,Poust:response})}
       
    })
    .catch(err=>{
        if(!err.errors){res.status(400).json({message:`this id ${id} does not exist`})}
        else{ res.status(400).json({err:err.errors[0].message})}
    })
}
//? //////////////////////////////////////////////////////////////
const removeMyPoust=(req,res)=>{
    const idUser =req.user.id
    const id=req.params.id
    controls.deletePoust(idUser,id)
      .then(response=>{
        if(response===null){res.status(400).json({message:`this id ${id} is null`})}
        else if(response===1){ res.status(200).json({message:`the user whit the id ${id} was deleted`,response})}
       else {res.status(400).json({message:`this not is your poust`})}
      })
    .catch(err=>{
        if(!err.errors){res.status(400).json({message:`this id ${id} does not exist`})}
        else{ res.status(400).json({err:err.errors[0].message})}
    })
}
//? //////////////////////////////////////////////////////////////
const upDatePoust=(req,res)=>{
    const id =req.user.id
    const idParamas=req.params.id
    const data=req.body 
    if(data.tittle&&data.content){
        controls.updateMyPouest(idParamas,data,id)
        .then(response=>{
            if(response[0]===0){res.status(400).json({message:`this id ${id} is null or this not is your post`})}
           else{ res.status(200).json({message:'All ok ',Poust:response})}
           
        })    
        .catch(err=>{
         
        if(!err.errors){res.status(400).json({message:`this id ${id} does not exist`})}
        else{ res.status(400).json({err:err.errors[0].message})}
    })
    }else{
        res.status(400).json({message:'mising data brou gatuno'})
    }
    }
//? //////////////////////////////////////////////////////////////
const deletedPouest=(req,res)=>{
    const id=req.params.id
    const idUser=req.user.rol
    controls.deletePoust(idUser,id)
    .then(response=>{
       if(response===null){res.status(400).json({message:`this id ${id} is null`})}
        else if(response===1){ res.status(200).json({message:`the user whit the id ${id} was deleted`,response})}
       else {res.status(400).json({message:`this not is your poust`})}
      })
    .catch(err=>{
        if(!err.errors){res.status(400).json({message:`this id ${id} does not exist`})}
        else{ res.status(400).json({err:err.errors[0].message})}
    })
}

//? //////////////////////////////////////////////////////////////
//? //////////////////////////////////////////////////////////////

module.exports={
   GETallPoust,
   GETmyPoust,
   GETpoustID,
   deletedPouest,
   upDatePoust,
   newPoust,
   removeMyPoust
}