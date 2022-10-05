const router=require('express').Router()
const http=require('./Combersation.http')
const passport=require('passport')
const {CombersationMiddleware}=require('../middleware/Combers.middleware')
require('../middleware/auth.middleware')(passport)


router.route('/:id')
        
    .get(passport.authenticate('jwt',{session:false}),CombersationMiddleware,http.GETmyCombersationID)

router.route('/')
    .post(passport.authenticate('jwt',{session:false}),http.newCombersation)


exports.router=router

