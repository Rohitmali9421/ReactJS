const mongooes=require("mongoose")

const userSchema=mongooes.Schema(
    {
        name:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        image:{
            type:String,
        }
    }
)
const User=mongooes.model("User",userSchema)
module.exports=User
