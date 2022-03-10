const express=require("express");
const routes=express.Routes();
const mongoose=require("mongoosee");
const bcrypt=require("bcryptjs");
const User=mongoose.model("User");
const jwt=require("jsonwebtoken");
const jwtSecret=process.env.JWT


routes.post("/signup",async (req,res)=>{
const {name,email,password}=req.body;
if(!email|| !password||!name){
    return res.status(422).json({error:"please add all the fields"});
 }
 await User.findOne({email:email}).then((savedUser)=>{
    if(savedUser){
        return res.status(422).json({error:"user already exist"});
    }
bcrypt.hash(password,12).then(hashedpassword=>{
     
    const user=new User({ 
        email,password:hashedpassword,name,isAdmin:false
    })
    user.save().then(user=>{
        res.json({message:"saved successfully"})
    }).catch(err=>{
        console.log(err);
    });
 
})
   

})

.catch(err=>{
    console.log(err);
})


})


routes.post("/login",(req,res)=>{

    const {email,password}=req.body;
if(!email || ! password){
    return res.status(422).json({error:"please fill the required fields"});
}

User.findOne({email:email}).then(savedUser=>{
    if(!savedUser){
        res.status(422).json({error:"invalid credentials"});
    }
    bcrypt.compare(password,savedUser.password).then(doMatch=>{
        if(doMatch){

           const token=jwt.sign({_id:savedUser._id},jwtSecret);
            const {_id,name,email}=savedUser
            res.json({token,user:{_id,name,email}});
            // res.json({message:"successfully acha signedin "})
        }else{
            return res.status(422).json({error:"Invalid credentials"});
        } 
         
}).catch(err=>{
    console.log(err);
})
})

})