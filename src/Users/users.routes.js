const router=require('express').Router()
const http=require('./users.http')
const passport=require('passport')
const {rolMiddleware}=require('../middleware/rol.middleware')
require('../middleware/auth.middleware')(passport)

router.route('/')
    .get(http.getAllUsers)

router.route('/register')
    .post(http.Register)

router.route('/My')
    .get(passport.authenticate('jwt',{session:false}),http.GETmyUSER)
    .put(passport.authenticate('jwt',{session:false}),http.upDate)
    .delete(passport.authenticate('jwt',{session:false}),http.removeMyUser)
 
router.route('/ad/:id')
    .get(passport.authenticate('jwt',{session:false}),http.GETuserID)
    .put(passport.authenticate('jwt',{session:false}),rolMiddleware,http.fullPower)
    .delete(passport.authenticate('jwt',{session:false}),rolMiddleware,http.deletedUser)



exports.router=router