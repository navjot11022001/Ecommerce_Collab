const mongoose=require("mongoose");


const productSchema=new mongoose.Schema({
name:{
    type:String,
    trim:true,
    required:true,
},
price:{
    type:Number,
    min:0,
},
img:{
    type:String,
    trim:true,
    default:"/images/product.jpg",
},
desc:{
    type:String,
    trim:true,
},
qty:{
    type:Number,
    min:0,
}
});


mongoose.model("Product",productSchema);
// module.exports=Product