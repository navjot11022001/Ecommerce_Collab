const express=require("express");
const routes=express.Routes();

routes.get("/login",(req,res)=>{

    const {email,password}=req.body;
if(!email || ! password){
    return res.status(422).json({error:"please fill the required fields"});
}



})