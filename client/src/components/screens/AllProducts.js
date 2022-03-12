import React, { useEffect, useState } from 'react'
import Products from "./productScreen/Products"
import { useDispatch,useSelector } from 'react-redux';
import { setProduct } from '../actions/actions-type';
const AllProducts = () => {
const myState=useSelector((state)=>state.productReducer)
const dispatch=useDispatch();

console.log(myState)
const [data,setData]=useState([]);

useEffect(()=>{
fetch("/products",{
  headers:{}
}).then(res=>res.json()).then(result=>{
  console.log(result);
  dispatch(setProduct(result));
})
},[])
 
  return (
//  <Carouse/>
<Products /> 
  )
}

export default AllProducts