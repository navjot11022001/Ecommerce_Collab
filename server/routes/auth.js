const express=require("express");
const router=express.Router();
const mongoose=require("mongoose");
const bcrypt=require("bcryptjs");
const User=mongoose.model("User");
const jwt=require("jsonwebtoken");
const requiredLogin = require("../middleware/requiredLogin");
const jwtSecret=process.env.JWT

router.get('/protected',requiredLogin,(req,res)=>{
    
    res.send("hello");
})
  router.get("/",(req,res)=>{
      res.send("yeah kya h")
  })

router.post("/signup",async (req,res)=>{
    console.log("Calling signup route");
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
        console.log(user)
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


router.post("/login",(req,res)=>{

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
            console.log(token+ ", " +name+ " "+ email);
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



module.exports=router 
   