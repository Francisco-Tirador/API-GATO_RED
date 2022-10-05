const router=require('express').Router()
const http=require('./message.http')
const passport=require('passport')
const {CombersationMiddleware}=require('../middleware/Combers.middleware')
require('../middleware/auth.middleware')(passport)


router.route('/:id')
    .get(passport.authenticate('jwt',{session:false}),CombersationMiddleware,http.GETmyMessage)
    .delete(passport.authenticate('jwt',{session:false}),http.deletedMessage)
    .post(passport.authenticate('jwt',{session:false}),http.newMessage)

    


exports.router=router

