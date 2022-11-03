const express = require('express')
const router = express.Router()
const {registerUser,loginUser,logOut,getUserDetails} = require('../controlller/UserControl')

router.route('/signup').post(registerUser)
router.route('/login').post(loginUser)
// router.route('/pass/forgot').post(forgotPass)
// router.route('/pass/reset/:token').put(ResetPASS)
router.route('/logout').post(logOut)

router.route('/getall').get(getUserDetails)


module.exports= router


