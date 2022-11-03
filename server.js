const app = require('./app')
const dotenv = require('dotenv')


const connectDB=require('./config/db')

dotenv.config({path:"config/config.env"})

connectDB();


app.listen(process.env.PORT,()=>{
    console.log(`server is running at  https://bbackend-01.herokuapp.com `)
})