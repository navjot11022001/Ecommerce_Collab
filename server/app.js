const express = require("express");
const app=express();
const PORT=process.env.PORT || 5500;
const path=require("path");

app.use(express.urlencoded({extended:false}));
// middleware while incomming request will be parsed 
app.use(express.json());



app.get("/",(req,res)=>{

    res.send("json")
})









app.listen(PORT,()=>{
    console.log("server is starting on port number "+PORT);
})