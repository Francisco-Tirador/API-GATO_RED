const controls=require('./Combersations.controllers')

const newCombersation=(req, res)=>{
const data=req.body
if(data.tittle){
    controls.CreateCombersation(data)
    .then((response)=>{
        console.log(response)
        res.status(201).json({message:'ALL OK GALACTIC MIAU',response})    
    })
    .catch(err=>{
        if(!err.errors){res.status(400).json({message:`this id  does not exist`})}
        else{ res.status(400).json({err:err.errors[0].message})}
       
    })
}else{ 
    res.status(400).json({message:'mising data brou gatuno'})
}
}

const GETmyCombersationID=(req,res)=>{
    const id=req.params.id
    controls.getMyCombersation(id)
    .then(response=>{
        if(response===null){res.status(400).json({message:`this id ${id} does not exist or is null`})}
       else{ res.status(200).json({response})}
    })
    .catch(err=>{
        if(!err.errors){res.status(400).json({message:`this id ${id} does not exist`})}
       else{ res.status(400).json({err:err.errors[0].message})}
    })
}
//? //////////////////////////////////////////////////////////////

module.exports={
    GETmyCombersationID,
    newCombersation
}

