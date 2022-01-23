
const express=require("express")
const connectDB = require("./config/ConnectDb")
const AuthRoute = require("./routes/auth")
require('dotenv').config()
const app=express()

connectDB()
app.use(express.json())
app.use('/api/auth', AuthRoute)

app.listen(process.env.port , ()=> console.log(`server is running on port ${process.env.port}`))