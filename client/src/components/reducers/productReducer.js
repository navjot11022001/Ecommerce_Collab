const productReducer=(state={productList:[]},action)=>{
    switch(action.type){
    case "SET_PRODUCTS":console.log("ayi")
        return  {
        ...state,productList:action.payload };
 
    default:
        return state
    };
    
    }
    export default productReducer;