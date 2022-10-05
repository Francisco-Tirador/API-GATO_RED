const {Sequelize}=require('sequelize')

const variableEntorno=require('./variablesEntorno')
const db=new Sequelize({
    dialect:variableEntorno.dialect,
    host:variableEntorno.host,
    username:variableEntorno.user,
    password:variableEntorno.password,
    database:variableEntorno.database
})

module.exports={
    db
}

//  dialect:'postgres',
//     host:'localhost',
//     username:'postgres',
//     password:'goku1234',
//     database:'API-GATO-RED'