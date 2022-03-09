const mongoose=require("mongoose");

const userSchema=mongoose.Schema({
    name:{
    type:String,
    required:true,
    trim:true,
},
    email:{
type:String,
required:true,
trim:true,
    },
    password:{
type:String,
required:true,  
    },
    isAdmin:{
        type:Boolean,

    }
})
mongoose.model("User",userSchema);