const { response } = require('express')
const redCombersation=require('../modelos/redCombersation.model')


const CombersationMiddleware=async(req,res,next)=>{

const id=req.user.id
const idParm=req.params.id
try{
    const auth= await redCombersation.findAll({
        where:{userId:id,combersationId:idParm},
    })
    console.log(auth)
if(auth.length===1){next()}
else(
    
    res.status(400).json({Message:'this not is Your combersation'}),
    console.log(auth)
)}
catch{res.status(400).json({Message:'this comversation id does not exist '})}

}


module.exports={CombersationMiddleware}


