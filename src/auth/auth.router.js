const router=require('express').Router()

const http=require('./auth.http')

router.route('/')
    .post(http.login)

module.exports={router}
