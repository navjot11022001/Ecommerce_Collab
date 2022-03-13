import React, { useContext } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import Items from "./Items";
import { CartContext } from "./Cart";
import { useDispatch, useSelector } from "react-redux";

import {increment,decrement,clearCart,removeItem} from '../../actions/actions-type';

const MainCart = () => {
  const prod = useSelector((state)=>state.cartReducer);
  const dispatch=useDispatch();
let item=prod.cartList;
let totalItem=prod.count;
let totalAmount=prod.totalAmount;


  if (item.length === 0) {
    return (
      <>
        <section className="main-cart-section">
          <h1>Your Cart Items</h1>
          <p className="total-items">
            you have <span className="total-items-count">{totalItem} </span>{" "}
            items in shopping cart
          </p>
        </section>
      </>
    );
  }

  return (
    <>
      <section className="main-cart-section">
        <h1>Your Cart Items</h1>
        <p className="total-items">
          you have <span className="total-items-count">{totalItem} </span> items
          in shopping cart
        </p>

        <div className="cart-items">
          <div className="cart-items-container">
            <Scrollbars>
              {item.map((curItem) => {
                return <Items key={curItem.id} {...curItem} />;
              })}
            </Scrollbars>
          </div>
        </div>

        <div className="card-total">
          <h3>
            Cart Total : <span>{totalAmount}₹</span>
          </h3>
          <button>checkout</button>
          <button className="clear-cart" onClick={()=>dispatch(clearCart())}>
            Clear Cart
          </button>
        </div>
      </section>
    </>
  );
};

export default MainCart;
