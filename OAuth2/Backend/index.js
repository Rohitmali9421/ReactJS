const express=require("express")
require("dotenv").config()
const app=express()
const PORT=process.env.PORT || 3000
const AuthRouter=require("./Routes/authRoute")
app.get("/",(req,res)=>{
    res.json("Hello")
})
app.use("/",AuthRouter)
app.listen(PORT,()=>{
    console.log("Server is running ");
    
})