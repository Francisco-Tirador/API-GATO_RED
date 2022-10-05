const getEmeil=require('../Users/users.controllers')
const { comparePassword } = require('../utils/paswordHASHEO')


const Login=async(emeil,password)=>{
try{
    const data=await getEmeil.getEmeil(emeil)
    const xp=comparePassword(password,data.password)
  if(xp){
        
        return data
    }
    return false
}
catch(errors){return false}

}

module.exports={Login}