const combersations=require('./combersation.model')
const messages=require('./messeges.model')
const poust=require('./poust.model')
const redCombersation=require('./redCombersation.model')
const Roles=require('./rol.model')
const Users=require('./user.model')
const Validation=require('./validation.model')
//TODO // hasMANY el primero tiene la pk
//TODO // belog el primero tiene la fk

const initModels=()=>{

    combersations.hasMany(Validation)       
    Validation.belongsTo(combersations)
    

Roles.hasMany(Users,{foreignKey:'roleId'})       
Users.belongsTo(Roles)

Users.hasMany(poust,{foreignKey:'userId'}) 
poust.belongsTo(Users)

// Users.belongsToMany(combersations,{through:redCombersation,foreignKey:'userId'})
// combersations.belongsToMany(Users,{through:redCombersation,foreignKey:'combersationId'})

Users.hasMany(redCombersation,{foreignKey:'userId'})
redCombersation.belongsTo(Users)

combersations.hasMany(redCombersation,{foreignKey:'combersationId'})
redCombersation.belongsTo(combersations)

combersations.hasMany(messages,{foreignKey:'combersationId'})
messages.belongsTo(combersations)

Users.hasMany(messages,{foreignKey:'userId'})       
messages.belongsTo(Users)

}

module.exports={initModels}