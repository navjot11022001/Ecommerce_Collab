const express=require("express");
const router=express.Router();
const mongoose=require("mongoose");
// const Product=require("../models/productSchema");
const Product=mongoose.model("Product")

// router.get("/",async(req,res)=>{
// try{
// const product=await Product.find({});
// res.json({product});
// }
// catch(err){
// console.log("not getting all posts "+err);
// }

// })



router.get("/products",async(req,res)=>{
    try{
    const product=await Product.find({});
    res.json({product});
    }
    catch(err){
    console.log("not getting all posts "+err);
    }
    
    });



router.post("/createPosts",async (req,res)=>{
    try{
        console.log("peeche aayi kya")
const {name,price,img,desc}=req.body;
if(!name || !price || !img || !desc){
    return res.status(422).json({error:"please add all the fields"});

}
const product=new Product({
    name,price,img,desc
});
 product.save().then(result=>{
     res.json({posted:result});

 }).catch(err=>{
     console.log(err);
 })
    }
    catch(err){
console.log("unable to post "+err);
    }

})


module.exports=router 
