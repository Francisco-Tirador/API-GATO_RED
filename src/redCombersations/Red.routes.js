const router=require('express').Router()
const http=require('./Red.http')
const passport=require('passport')
const {rolMiddleware}=require('../middleware/rol.middleware')
require('../middleware/auth.middleware')(passport)

router.route('/validation')
.post(passport.authenticate('jwt',{session:false}),http.creValidation)


router.route('/')
    .post(passport.authenticate('jwt',{session:false}),http.newRed)

router.route('/My')
 .get(passport.authenticate('jwt',{session:false}),http.GETmyRedID)
router.route('/My/:id')
    .put(passport.authenticate('jwt',{session:false}),http.upDatecombersation)
    .delete(passport.authenticate('jwt',{session:false}),http.deletedCombersation)
 
router.route('/ad/:id')
    .get(passport.authenticate('jwt',{session:false}),http.GETcobersationID)

     
router.route('/validation/:id')
.get(passport.authenticate('jwt',{session:false}),http.Validation)


exports.router=router