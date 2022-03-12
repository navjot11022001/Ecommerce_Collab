const express = require("express");
const app=express();
const PORT=process.env.PORT || 5000;
const path=require("path");
require("./db/conn");



app.use(express.urlencoded({extended:false}));
// middleware while incomming request will be parsed 
app.use(express.json());

require("./models/productSchema");
require("./models/User");
app.use(require("./routes/productRoutes"));
app.use(require("./routes/auth"));
const seedDb=require("./seed");
seedDb();


app.listen(PORT,()=>{
    console.log("server is starting on port number "+PORT);
})