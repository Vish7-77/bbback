const mongoose = require('mongoose')
const validator = require('validator')


const userSchema = new mongoose.Schema(
    {



        name:{
            type:String,
            required:[true,'enter you name']
        },
        email:{
            type:String,
            required:[true,'enter your email'],
            unique:true,
            validate:[validator.isEmail,"enter valid mail"]
        },
password:{
    type:String,
    required:[true,'enter your Paswword'],
    minlength:[8,'password should be at least 8 charchter'],
    select:false

},
role:{
    type:String,
    default:'user'
},

 
    }
)

module.exports= mongoose.model('User',userSchema)