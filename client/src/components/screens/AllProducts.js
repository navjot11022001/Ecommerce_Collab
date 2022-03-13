import React, { useEffect, useState } from 'react'
import Products from "./productScreen/Products"
import { useDispatch,useSelector } from 'react-redux';
import { setProduct } from '../actions/actions-type';
import Load from "./productScreen/Load"
import Carous from './productScreen/Carous';
import SearchBar from '../SearchBar';

const AllProducts = () => {
const myState=useSelector((state)=>state.productReducer)
const dispatch=useDispatch();

const [Loader, setLoader ]   = useState(false);

console.log(myState)
const [data,setData]=useState([]);

useEffect(()=>{
fetch("/products",{
  headers:{}
}).then(res=>res.json()).then(result=>{
  console.log(result);
  dispatch(setProduct(result));
  setData(result);
  setLoader(true);
})
},[])
 
if(Loader=== true){
  return (
    <>
    <SearchBar/>
 <Carous/>

<Products/> 
    </>
  )
}
else{
      return (
        <Load></Load>
    );

}
}
export default AllProducts