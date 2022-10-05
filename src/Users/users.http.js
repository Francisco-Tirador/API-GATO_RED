
const controls=require('./users.controllers')

const Register=(req, res)=>{
const data=req.body
if(data.name&&data.password&&data.age&&data.emeil){
    controls.CreateUser(data)
    .then((response)=>{
    res.status(201).json({message:'ALL OK GALACTIC MIAU',user:response})
})    
    .catch(err=>{
        res.status(400).json({err:err.errors[0].message})
    })
}else{
    res.status(400).json({message:'mising data brou gatuno'})
}
}


//? //////////////////////////////////////////////////////////////
const getAllUsers=(req,res)=>{
    controls.getUsers() 
    .then(response=>{
        res.status(200).json({length:response.length,users:response})
    })
}
//? //////////////////////////////////////////////////////////////
const GETuserID=(req,res)=>{
    const id=req.params.id
    console.log(id)
    controls.getUserbyID(id)
    .then(response=>{
        if(response===null){res.status(400).json(response)}
       else{ res.status(200).json({user:response})}
    })
    .catch(err=>{
        if(!err.errors){res.status(400).json(response)}
       else{ res.status(400).json({err:err.errors[0].message})}
    })
}
//? //////////////////////////////////////////////////////////////
const GETmyUSER=(req,res)=>{
    const id =req.user.id
    controls.getUserbyID(id)
    .then(response=>{
        if(response===null){res.status(400).json({message:`this id ${id} does not exist or is null`})}
       else{ res.status(200).json({user:response})}
       
    })
    .catch(err=>{
        if(!err.errors){res.status(400).json({message:`this id ${id} does not exist`})}
        else{ res.status(400).json({err:err.errors[0].message})}
    })
}
//? //////////////////////////////////////////////////////////////
const removeMyUser=(req,res)=>{
    const id =req.user.id
    controls.deleteUser(id)
      .then(response=>{
        if(response===null){res.status(400).json({message:`this id ${id} is null`})}
       else{ res.status(200).json({message:`the user whit the id ${id} was deleted`})}
    })
    .catch(err=>{
        if(!err.errors){res.status(400).json({message:`this id ${id} does not exist`})}
        else{ res.status(400).json({err:err.errors[0].message})}
    })
}
//? //////////////////////////////////////////////////////////////
const upDate=(req,res)=>{
    const id =req.user.id
    const data=req.body
    if(data.name&&data.age&&data.emeil){
        controls.updateMyUser(id,data)
        .then((response)=>{
        res.status(201).json({message:'ALL OK GALACTIC MIAU',user:response})
    })    
        .catch(err=>{
            res.status(400).json({err:err.errors[0].message})
        })
    }else{
        res.status(400).json({message:'mising data brou gatuno'})
    }
    }
//? //////////////////////////////////////////////////////////////
const deletedUser=(req,res)=>{
    const id=req.params.id
    controls.deleteUser(id)
    .then(response=>{
        if(response===null){res.status(400).json({message:`this id ${id} is null`})}
       else{ res.status(200).json({message:`the user whit the id ${id} was deleted`})}
       
    })
    .catch(err=>{
        if(!err.errors){res.status(400).json({message:`this id ${id} does not exist`})}
        else{ res.status(400).json({err:err.errors[0].message})}
    })
}
//? //////////////////////////////////////////////////////////////
const fullPower=(req,res)=>{
    const id =req.params.id
    const data=req.body
    if(!data.RoleId){res.status(400).json({message:'missing data'})}
    controls.otorgarADNMIN(id,data)
    .then(response=>{
        if(response===null){res.status(400).json({message:`this id ${id} does not exist or is null`})}
        else{ res.status(200).json({user:response})} 
    })
    .catch(err=>{
        if(!err.errors){res.status(400).json({message:`this id ${id} does not exist or the value RoleId not is correct`})}
        else{ res.status(400).json({err:err.errors[0].message})}
    })
}
//? //////////////////////////////////////////////////////////////
//? //////////////////////////////////////////////////////////////

module.exports={
    Register,
    getAllUsers,
    GETmyUSER,
    GETuserID,
    removeMyUser,
    upDate,
    deletedUser,
    fullPower
}