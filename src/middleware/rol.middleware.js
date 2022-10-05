
const rolMiddleware=(req,res,next)=>{
    const rol_Id=req.user.rol
    if(rol_Id==='2c7809f3-967b-46b7-a027-56c630d6a7f0'){
        next()
    }else{
        res.status(400).json({Message:'Sorry you not are ADMIN'})
    }
}

module.exports={rolMiddleware}