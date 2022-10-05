const bcrypt=require('bcrypt')

const comparePassword=(plain,hasheo)=>{
    const xp=bcrypt.compareSync(plain,hasheo)
    return xp
}

const hasheoPassword=(plainPassword)=>{
    return bcrypt.hashSync(plainPassword,10)
}

module.exports={
    comparePassword,
    hasheoPassword
}