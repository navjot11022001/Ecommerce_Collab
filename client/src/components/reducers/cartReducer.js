const cartReducer=(state={cartList:[],count:0,totalAmount:0},action)=>{
switch(action.type){
case "ADD_TO_CART_SUCCESS":return{
    ...state,cartList:action.payload.cartList,count:action.payload.count
};
case "ADD_TO_CART_FAIL":return {
    error:action.payload
};
case "REMOVE_ITEM":

        return {
          ...state,
          
          cartList: state.cartList.filter((curElem) => {
            return curElem._id !== action.payload
           
          }),
          count:state.count- 1
          
        };
  
      case "CLEAR_CART":
        return { ...state, cartList: [] ,count:0,totalAmount:0};
  
      case "INCREMENT":
        const updatedCart = state.cartList.map((curElem) => {
         
          if (curElem._id === action.payload) {
            return { ...curElem, qty: curElem.qty + 1 };
          }
          return curElem;
        });
        return { ...state, cartList: updatedCart };
  
      case "DECREMENT":
        const newCart = state.cartList
          .map((curElem) => {
            if (curElem._id === action.payload) {
              return { ...curElem, qty: curElem.qty - 1 };
            }
            return curElem;
          })
          .filter((curElem) => curElem.qty !== 0);
          
        return { ...state, cartList: newCart };
  
      case "GET_TOTAL":
        let { count, totalAmount } = state.cartList.reduce(
          (accum, curVal) => {
            let { price, qty } = curVal;
  
            let updatedTotalAmount = price * qty;
            accum.totalAmount += updatedTotalAmount;
  
            accum.totalItem += qty;
            return accum;
          },
          {
           count: 0,
            totalAmount: 0,
          }
        );
return { ...state,totalAmount:totalAmount};
        
default:
    return state
}

}

export default cartReducer;