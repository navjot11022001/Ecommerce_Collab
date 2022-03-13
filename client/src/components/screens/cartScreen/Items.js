import React, { useContext } from "react";
import { CartContext } from "./Cart";
import {increment,decrement,clearCart,removeItem} from '../../actions/actions-type';
import { useDispatch, useSelector } from "react-redux";

const Items = ({ _id, desc, name, img, price,qty }) => {
 console.log(_id);
// const quantity = useSelector((state)=>state.cartReducer.quantity);
const dispatch=useDispatch();
  return (
    <>
      <div className="items-info">
        <div className="product-img">
          <img src={img} alt="iamge" />
        </div>

        <div className="title">
          <h2>{name}</h2>
          {/* <p>{desc}</p> */}
        </div>

        <div className="add-minus-quantity">
          <i className="fas fa-minus minus" onClick={() => dispatch(decrement(_id))}></i>
          <input type="text" placeholder={qty} />
          <i className="fas fa-plus add" onClick={() => dispatch(increment(_id))}></i>
        </div>

        <div className="price">
          <h3>{price}₹</h3>
        </div>

        <div className="remove-item">
          <i
            className="fas fa-trash-alt remove"
            onClick={() => dispatch(removeItem(_id))}></i>
        </div>
      </div>

      <hr />
    </>
  );
};

export default Items;
