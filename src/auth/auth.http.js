const jwt=require('jsonwebtoken')
const {Login}=require('./auth.controllrs')


const login=(req,res)=>{
    const data=req.body
    if(!data.emeil||!data.password){res.status(400).json({message:'missing data'})}
    
        Login(data.emeil,data.password)
        
        .then(response=>{
       if(response){
        const token=jwt.sign({
            id:response.id,
            rol:response.RoleId, 
            emeil:response.emeil
        },'Francotirador1235')
        res.status(200).json({token,userId:response.id})
       }else{
        res.status(400).json({err:'Las credenciales son incorrectas'})
       }
        })
    
}

module.exports={login}