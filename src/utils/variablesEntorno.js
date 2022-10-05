const dotenv = require('dotenv').config({ path: './config.env' });



const port=process.env.PORT
const    secretWord=process.env.secretWord
const    dialect=process.env.dialect
const    host=process.env.host
const    user=process.env.user
const    password=process.env.password
const    database=process.env.database


module.exports={
    port, 
    secretWord,
    dialect,
    host,
    user,
    password,
    database
}