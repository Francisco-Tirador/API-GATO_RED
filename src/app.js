const express=require('express')
const {port}=require('./utils/variablesEntorno')
const {db}=require('./utils/DB')
const initModels= require('./modelos/initModels')
const Roles = require('./modelos/rol.model')
const initData = require('./utils/dbDEFAULT')
// //! con esto nos permite documentar
// const swaggerUi=require('swagger-ui-express')//TODO - cramos un archivo src y cramos la ruta
//* configuraciones iniciales

const app=express()
app.use(express.json()) //!Esta configuracion es para activar el req.body

app.listen(port,()=>{
    console.log(`We are in the port ${port} MIAUUU`)
})

initModels.initModels()  
    
//? aqui se encientra la coneccion de la base de datos
db.authenticate()
.then(()=>console.log('Data base authenticated'))
.catch((err)=>console.log(err))

db.sync({ 
    
})
.then(()=>{console.log('Data base synced')
//*Creacion de tablas
,initData()  
 
})
.catch((err)=>console.log(err))

//*Rutas
const RouteUsers=require('./Users/users.routes').router
const RouterAuth=require('./auth/auth.router').router
const RoutePoust=require('./Poust/poust.routes').router
const RouteRed=require('./redCombersations/Red.routes').router
const RouteCombersation=require('./Combersations/Combersation.routes').router
const RouteMessages=require('./message/message.router').router
// const swaggerDoc=require('./swagger.yaml')//!exportamos el archivo que creamos .json


app.use('/api-gato-red/v1/Message',RouteMessages)
app.use("/api-gato-red/v1/users",RouteUsers)
app.use("/api-gato-red/v1/auth",RouterAuth)
app.use('/api-gato-red/v1/poust',RoutePoust)
app.use('/api-gato-red/v1/Red',RouteRed)
app.use('/api-gato-red/v1/Comber',RouteCombersation)
// app.use('/api-gato-red/Doc',swaggerUi.serve,swaggerUi.setup(swaggerDoc))//*pasamos los swaggerUi en el parametro el archivo que creamos 



