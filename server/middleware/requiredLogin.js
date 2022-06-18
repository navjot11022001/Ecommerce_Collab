const mongoose=require("mongoose");
const jwt=require("jsonwebtoken");
const User=mongoose.model("User");

module.exports=(req,res,next)=>{
console.log("Ayi kya");
const {authorization}=req.headers;
console.log(authorization);
if(!authorization){
    return res.status(404).json({error:"You must be logged in"});
}
const token=authorization.replace("Bearer ","");
jwt.verify(token,process.env.JWT,(err,payload)=>{
    if(err){
return res.status(401).json({error:"You must me logged in"});
    }
    const {_id}=payload;
    User.findById(_id).then(userData=>{
        req.user=use
        rData
        next();
    })
})
}