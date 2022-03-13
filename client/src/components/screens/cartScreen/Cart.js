import React, { useReducer, useEffect,} from "react";
import { useDispatch, useSelector } from "react-redux";
import "./cart.css";
// import { products } from "./products";
import MainCart from "./MainCart";

const Cart = () => {
    //Creating the Reducer
    const products=useSelector((state)=>state.cartReducer.cartList);
    const dispatch=useDispatch();
    console.log("these are "+products);
   
  
  useEffect(() => {
    dispatch({ type: "GET_TOTAL" });
    // console.log("Awesome");
  }, [products]);

  return (
  
      <MainCart/>
  );
};

export default Cart;
