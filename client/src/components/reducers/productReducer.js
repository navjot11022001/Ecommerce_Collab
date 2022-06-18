const productReducer=(state={productList:[],searchedProd:""},action)=>{
    switch(action.type){
    case "SET_PRODUCTS":console.log("ayi")
        return  {
        ...state,productList:action.payload 
    };
//     case "SEARCH_FUNCTIONALITY":
//         // console.log(state.productList.product)
//     const searchedProducts=state.productList.product.filter((item)=>{
//         console.log(action.payload);
//         return item.name.toLowerCase().includes(action.payload.toLowerCase());
//     })
//    state.productList.product=searchedProducts
//     return  {
//     ...state,searchedProd:action.payload
// };

    default:
        return state
    };
    
    }
    export default productReducer;