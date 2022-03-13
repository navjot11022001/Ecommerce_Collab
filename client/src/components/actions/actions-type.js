export const setProduct=(products)=>{
return{
    type:"SET_PRODUCTS",
    payload:products,
}

}
export const addProduct=(product)=>{
    console.log(product)
return {type:"ADD_TO_CART_SUCCESS",
payload:product
}
}
export const removeItem = (id) => {
    return ({
      type: "REMOVE_ITEM",
      payload: id,
    })
  };

  
  // increment the item
  export const increment = (id) => {
      return ({
          type: "INCREMENT",
          payload: id,
        });
    };
    
    // decrement the item
    export const decrement = (id) => {
        return ({
            type: "DECREMENT",
            payload: id,
        });
    };
    
    
    export const clearCart = () => {
      return ({ type: "CLEAR_CART" });
    };

    export const setUser=(user)=>{
        return ({
            type:"SET_USER",
            payload:user
        })
    }
    export const removeUser=(user)=>{
        return ({
            type:"REMOVE_USER",
          
        })
    }