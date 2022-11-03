const express = require("express");
const errorMiddleware = require('./MiddleWare/errormw')
const app = express();
app.use(express.json());

//route

const user = require("./routes/UserRoute");

app.use("/api/v1", user);


//middleware for security and errorhandling
app.use(errorMiddleware)


module.exports = app;
