import React, { useState } from 'react'
import "./product.css"
import { useDispatch,useSelector } from 'react-redux';
import {addProduct} from '../../actions/actions-type';
const Product = ({product}) => {
    
   const {img,name,desc,price}=product
    const dispatch=useDispatch();
    const presentList=useSelector((state)=>state.cartReducer)
    const pastList=useSelector((state)=>state.productReducer)
// console.log(presentList);
// console.log(pastList);

    const [cart, setCart] = useState('Add To Cart');

    function update(product)
    {
        if(cart==="Add To Cart"){
        setCart('Added to Cart');
        
        dispatch(addProduct({cartList:[...presentList.cartList,product],count:presentList.count+1}));
        }
        else{
            alert("Dear, its already added ");
        }
    }

    // function increment()
    // {
    //     if(cart !== 'Added to Cart')
    //     {

    //     // setQuantity(Quantity+1);
    // //    increaseCount(count);
    //     }
    //     else
    //     {
    //         alert('Already Added in the Cart');
    //     } 
    // }


  return (
    <div>
    <div className='productCard'>
   <div className='imageDiv'>
   <img src={img}></img>
   </div>

   {/* <hr></hr> */}
   <div className='lower_section'>
   <h5 className='brand'><b>{name}</b></h5>
   <div className='priceDiv'>
   <h2 className='price mrp'><b>MRP :</b>  Rs.{price}</h2>
   <h3 className='price'><b>Our Price:</b> Rs.{Math.round(price-price*10/100)}</h3>
   </div>


  {/* {showbutton===true &&  */}
  
   <div className='addToCartDiv'>
   <button  className={cart === 'Added to Cart' ? 'orangeButton addToCart big-button':'whiteButton addToCart big-button'} onClick={(event)=>{
           update(product);
        //    increment();
        //    searchBrand(brand)
       }}
    >
       <b>{cart}</b></button>
   {/* <button className='buyNow'><b>Buy Now</b></button> */}
   </div>


  

   
   </div>
   </div>
   </div>
  )
}

export default Product