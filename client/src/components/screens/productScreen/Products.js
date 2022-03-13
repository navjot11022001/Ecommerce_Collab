// // import React from 'react'
// // import {useSelector} from "react-redux";
// // import Product from "./Product";
// // const Products = () => {
// //     const myState=useSelector((state)=>state.productReducer)
 
// //   return (
// //     <div><div className="parentProduct">
// //     {myState.map((index) => {
// //       return (
// //         <Product
// //           img={index.img}
// //           desc={index.desc}
// //           price={index.price}
// //           name={index.name}
// //         />
// //       );
// //     })}
// //   </div></div>
// //   )
// // }

// // export default Products

// import React, { useState, useEffect } from "react";
// import Product from "./Product";
// import Load from './Load';
// import {useSelector} from "react-redux";
// function Products() {
//   const [cartProducts , setCartProducts] = useState([]);
// const [count,setCount]=useState(0);
//   const [searchProduct, setSearchProduct] = useState('');
//   const increaseCount = (cartCount) => {
//     cartCount = cartCount + 1;
//     setCount(cartCount);
//   };

//   const addProductToCart = (product) => {
//     cartProducts.push(product);
//     console.log(cartProducts);
//     setCartProducts(cartProducts);
    
//   }
//   // const { increaseCount, count , searchProduct , addProductToCart} = props;


//   const [productsList, setProductL] = useState([]);

//   const [Loader, setLoader ]   = useState(false);

  


//   const searchedData = productsList.filter((item) => {
//     return item.title.toLowerCase().includes(searchProduct.toLowerCase());
//   });


//   const dataToShow = searchedData || productsList

//   const myState=useSelector((state)=>state.productReducer)
 

//   useEffect(() => {
//         setLoader(true);
//         setProductL(myState);
    
//   }, []);


//   function searchBrand(brand)
//   {
//     let newArray = productsList.filter((item)=>{
//         return item.title === brand;
//     })

//     addProductToCart(newArray[0]);
//   }

//   if(Loader===true)
//   {
//   return (
//     <div>
//       <div className="parentProduct">
//         {dataToShow.map((index) => {
//           return (
//             <Product

//             showbutton = { true}
//             searchBrand={searchBrand}
//               count={count}
//               increaseCount={increaseCount}
//               img={index.img}
//               desc={index.desc}
//               price={index.price}
//               name={index.name}
//             ></Product>
//           );
//         })}
//       </div>
//     </div>
//   );
// }
// else
// {
//     return (
//         <Load></Load>
//     );
// }
// }

// export default Products;
import React,{useState} from 'react'
import { useSelector } from 'react-redux';
import Product from "./Product"
import "./Products.css"
const Products = (props) => {

const myState=useSelector(state=>state.productReducer)
console.log(myState);
  return (
    <div><div className="parentProduct">
   {
myState.productList.product.map((index) => {
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