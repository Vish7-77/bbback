const ErrorHander = require('../utils/error')
const CatchAsyncErrors = require('../MiddleWare/AsyncErrors')
const User = require('../models/userModel')
const sendToken = require("../utils/Token");
const sendEmail = require("../utils/sendEmail.js");
const crypto = require("crypto-js");


//SIGN UP 
exports.registerUser=CatchAsyncErrors(async(req,res,next)=>{
    const{name,email,password} = req.body;
    const user = await User.create({
        name,email,password
    });
    res.status(201).json({
        success:true,
        user
    })
})

//Login










exports.loginUser = CatchAsyncErrors(async (req, res, next) => {
  const { email, pass } = req.body;
  //cheking if user given pass and email
  if (!email || !pass) {
    return next(new ErrorHander("entre email and pass", 400));
  }
  const user = await User.findOne({ email }).select("+pass");
  if (!user) {
    return next(new ErrorHander("invalid ", 401));
  }
  const isPassMatched = user.comparePass(pass);

  if (!isPassMatched) {
    return next(new ErrorHander("invalid ", 401));
  }
  sendToken(user, 200, res);
});


//logout

exports.logOut = CatchAsyncErrors(async (req, res, next) => {
    res.cookie("token", null, {
      expires: new Date(Date.now()),
      httpOnly: true,
    });
  
    res.status(200).json({
      success: true,
      message: "logged out",
    });
  });
        
  
  //get user datails


exports.getUserDetails=CatchAsyncErrors(async(req,res,next)=>{
    const users =await User.find()
  
   res.status(200).json({
    success:true,
    users
   })
  })
  
  
  