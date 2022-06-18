
import React,{useState} from 'react'
import { useSelector } from 'react-redux';
import Product from "./Product"
import "./Products.css"
const Products = (props) => {

const myState=useSelector(state=>state.productReducer);
// setState(myState);
console.log(myState);

  return (
    <div><div className="parentProduct">
   {
props.data.product.map((index) => {
     return (
       <Product key={index._id}
        product={index}
        />
  );
    })}
  </div>
  </div>
  )
}

export default Products