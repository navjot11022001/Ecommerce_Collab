import React from 'react'

const Product = (props) => {
    const {name,img,price,desc}=props;
  return (
    <div>
              <div className='productCard'>
            <div className='imageDiv'>
            <img src={img}></img>
            </div>

            <hr></hr>
            <div className='lower_section'>
            <h2 className='brand'><i><b>{name}</b></i></h2>
            <div className='priceDiv'>
            <h2 className='price mrp'><b>MRP :</b>  Rs.{price}</h2>
            <h3 className='price'><b>Our Price:</b> Rs.{price-price*10/100}</h3>
            </div>
           <div className='addToCartDiv'>
            <button className='addToCart'><b>Add to Cart</b></button>
            </div>
            </div>
            </div>

    </div>
  )
}

export default Product