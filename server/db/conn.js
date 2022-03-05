const dotenv=require("dotenv");
const mongoose=require("mongoose");
dotenv.config({path:"./config/config.env"});
console.log("ayi kya")
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("connection is successFull");
}).catch((err)=>{
    console.log("unable to connect "+err);
})
 