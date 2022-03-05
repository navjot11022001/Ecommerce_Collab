const mongoose=require("mongoose");
const Product=mongoose.model("Product")

const products=[{


    name:"iphone",
    price:50000,
    desc:"lorem",
    img:"https://images.unsplash.com/photo-1556656793-08538906a9f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
},
{


    name:"ipad",
    price:50000,
    desc:"lorem",
    img:"https://images.unsplash.com/photo-1569770218135-bea267ed7e84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
},{


    name:"iwatch",
    price:30000,
    desc:"lorem",
    img:"https://images.unsplash.com/photo-1558126319-c9feecbf57ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80"
},{


    name:"macbook",
    price:100000,
    desc:"lorem",
    img:"https://images.unsplash.com/photo-1569770218135-bea267ed7e84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
},


]

const seedDb=async()=>{
    await Product.deleteMany({});
    await Product.insertMany(products);
    console.log('DB seeded');
}
module.exports=seedDb;