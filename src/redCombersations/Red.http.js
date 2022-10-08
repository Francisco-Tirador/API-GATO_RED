const controls=require('./Red.controllers')

const newRed=(req, res)=>{
const data=req.body
if(data.userId&&data.combersationId){
    controls.CreateRED(data)
    .then((response)=>{
        
        if(response===null){res.status(400).json({message:`this id ${id} does not exist or is null`})}
        else if(response===400){res.status(400).json({message:'this Chat already exists'})}
        else if(response===401){res.status(400).json({message:'this user id does not exists'})}
        else{ res.status(201).json({message:'ALL OK GALACTIC MIAU',response})}
})    
    .catch(err=>{
        if(!err.errors){res.status(400).json({message:`this id are null`})}
        else{ res.status(400).json({err:err.errors[0].message})}
       
    })
}else{ 
    res.status(400).json({message:'mising data brou gatuno'})
}
}

const GETmyRedID=(req,res)=>{
    const id=req.user.id
    controls.getMyRed(id)
    .then(response=>{
        if(response===null){res.status(400).json({message:`this id ${id} does not exist or is null`})}
       else{ res.status(200).json({length:response.length,Red:response})}
    })
    .catch(err=>{
        if(!err.errors){res.status(400).json({message:`this id ${id} does not exist`})}
       else{ res.status(400).json({err:err.errors[0].message})}
    })
}
//? //////////////////////////////////////////////////////////////
const GETcobersationID=(req,res)=>{
    const id =req.user.id
    const idComber=req.params.id
    controls.GetCombersationByid(idComber,id)
    .then(response=>{
        if(response===null){res.status(400).json({message:`this id ${id} does not exist or is null`})}
       else{ res.status(200).json({length:response.length,Red:response})}
       
    })
    .catch(err=>{
        if(!err.errors){res.status(400).json({message:`this id ${id} does not exist`})}
        else{ res.status(400).json({err:err.errors[0].message})}
    })
}

//? //////////////////////////////////////////////////////////////
const upDatecombersation=(req,res)=>{
    const id =req.user.id
    const idParamas=req.params.id
    const data=req.body 
    if(data.tittle){
        controls.updateMyCombersation(idParamas,data,id)
        .then(response=>{
            if(response===401){res.status(400).json({message:`this id ${id} is null `})}
            else{ res.status(200).json({message:'All ok ',response})}
           
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
const deletedCombersation=(req,res)=>{
    const id=req.params.id
    const idUser=req.user.id
    controls.deleteCombersation(idUser,id)
    .then(response=>{
        if(response===null){res.status(400).json({message:`this id ${id} is null`})}
        else if(response===1){ res.status(200).json({message:`the RedCombersation whit the id ${id} was deleted`,response})}
       else {res.status(400).json({message:`this not is your RedCombersation`,response})}
      })
    .catch(err=>{
        if(!err.errors){res.status(400).json({message:`this id ${id} does not exist`})}
        else{ res.status(400).json({err:err.errors[0].message})}
    })
}

//? //////////////////////////////////////////////////////////////
const Validation=(req,res)=>{
    const id=req.params.id
    const idUser=req.user.id
    controls.getValidation(id,idUser)
    .then(response=>{
        if(response===false){res.status(400).json({message:`ya existimos `,response})}
        else if(response===0){ res.status(200).json({message:`podemos pasar`})}
       else {res.status(400).json({message:`this not is your RedCombersation`,response})}
      })
    .catch(err=>{
        if(!err.errors){res.status(400).json({message:`this id ${id} does not exist`})}
        else{ res.status(400).json({err:err.errors[0].message})}
    })
}
//? //////////////////////////////////////////////////////////////
const creValidation=(req,res)=>{
    const data=req.data
    if(data.User1&&data.User2&&data.Red){
    controls.createValidation(data)
    .then(response=>{
        res.status(201).json({response})})
    .catch(err=>{
        if(!err.errors){res.status(400).json({message:`this id ${id} does not exist`})}
        else{ res.status(400).json({err:err.errors[0].message})}
    })
}else{ res.status(400).json({message:'missing data'})}
}
//? //////////////////////////////////////////////////////////////
module.exports={
   GETcobersationID,
   newRed,
   deletedCombersation,
   upDatecombersation,
   GETmyRedID,
   Validation,
   creValidation
}