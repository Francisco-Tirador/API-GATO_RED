const router=require('express').Router()
const http=require('./poust.http')
const passport=require('passport')
const {rolMiddleware}=require('../middleware/rol.middleware')
require('../middleware/auth.middleware')(passport)

router.route('/')
    .get(http.GETallPoust)
    .post(passport.authenticate('jwt',{session:false}),http.newPoust)


router.route('/My')
 .get(passport.authenticate('jwt',{session:false}),http.GETmyPoust)

router.route('/My/:id')
    .put(passport.authenticate('jwt',{session:false}),http.upDatePoust)
    .delete(passport.authenticate('jwt',{session:false}),http.removeMyPoust)
 
router.route('/ad/:id')
    .delete(passport.authenticate('jwt',{session:false}),rolMiddleware,http.deletedPouest)
    .get(passport.authenticate('jwt',{session:false}),http.GETpoustID)


exports.router=router