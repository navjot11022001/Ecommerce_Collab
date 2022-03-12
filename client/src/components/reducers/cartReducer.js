const cartReducer=(state={productList:[],count:0},action)=>{
switch(action.type){
case "ADD_TO_CART_SUCCESS":return{
    ...state,productList:action.payload.productList,count:action.payload.count
};
case "ADD_TO_CART_FAIL":return {
    error:action.payload
};
default:
    return state
}

}
export default cartReducer;