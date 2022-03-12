import React, { useState } from 'react'
import "./product.css"

const Product = (props) => {
    // const [showbutton,setShowButton]=useState(true);
   const {img,name,description,price}=props
    // const [Quantity, setQuantity] = useState(0);

    const [cart, setCart] = useState('Add To Cart');

    function update()
    {
        setCart('Added to Cart')
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
           update();
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