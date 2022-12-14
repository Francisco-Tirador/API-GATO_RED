const {Sequelize}=require('sequelize')

const variableEntorno=require('./variablesEntorno')
const db=new Sequelize({
    dialect:'postgres',
    host:variableEntorno.host,
    username:variableEntorno.user,
    password:variableEntorno.password,
    database:variableEntorno.database,
    logging:false,
    dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false,
        },
}
})

module.exports={
    db
}

//  ,
//     host:'localhost',
//     username:'postgres',
//     password:'goku1234',
//     database:'API-GATO-RED'