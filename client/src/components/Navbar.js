import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { removeUser } from "./actions/actions-type";
import Swal from "sweetalert2";
const Navbar = () => {
  const count = useSelector((state) => state.cartReducer.count);
  const user = useSelector((state) => state.UserReducer);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure you want to logout?",
      showDenyButton: false,
      showCancelButton: true,
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(removeUser());
        history.push("/login");
        Swal.fire("Logged out successfully!", "", "success");
      }
    });
  };

  const renderList = () => {
    console.log(user);
    if (user.initialState && user.initialState.user.isAdmin) {
      return [
        <li className="nav-item">
          <Link className="nav-link" to="/products">
            Products
          </Link>
        </li>,

        <li className="nav-item">
          <Link className="nav-link" to="/product/new">
            New
          </Link>
        </li>,
        <li className="nav-item">
          <Link className="nav-link" to="/addtocart">
            <div className="cart">
              <span className="count">{count}</span>
              <i className="material-icons">shopping_cart</i>
            </div>
          </Link>
        </li>,
        <Link className="nav-link" onClick={() => handleLogout()}>
          <i
            className="fa fa-sign-in me-1"
            style={{ color: "black" }}
            aria-hidden="true"
          ></i>
          Logout
        </Link>,
      ];
    }
    if (user.initialState) {
      return [
        <li className="nav-item">
          <Link className="nav-link" to="/products">
            Products
          </Link>
        </li>,

        <li className="nav-item">
          <Link className="nav-link" to="/addtocart">
            <div className="cart">
              <span className="count">{count}</span>
              <i className="material-icons">shopping_cart</i>
            </div>
          </Link>
        </li>,
        <Link className="nav-link" onClick={() => handleLogout()}>
          <i
            className="fa fa-sign-in me-1"
            style={{ color: "black" }}
            aria-hidden="true"
          ></i>
          Logout
        </Link>,
      ];
    } else {
      return [
        <li className="nav-item">
          <Link className="nav-link" to="/products">
            Products
          </Link>
        </li>,

        <li className="nav-item">
          <Link className="nav-link" to="/addtocart">
            <div className="cart">
              <span className="count">{count}</span>
              <i className="material-icons">shopping_cart</i>
            </div>
          </Link>
        </li>,

        <li className="nav-item">
          <Link className="nav-link" to="/login">
            <i
              className="fa fa-sign-in me-1"
              style={{ color: "black" }}
              aria-hidden="true"
            ></i>
            Login
          </Link>
        </li>,
      ];
    }
  };
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <i className="fas fa-shopping-basket"></i>Shopping Cart
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {/* <li className="nav-item">
              <Link className="nav-link" to="/products">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/product/new">
                New
              </Link>
            </li>
            <li className="nav-item">
              
              <Link className="nav-link" to="/addtocart">
                <div className="cart">
                  <span className="count">{count}</span>
                  <i className="material-icons">shopping_cart</i>
                </div>
              </Link>
            </li>
            {/* <li className="nav-item"> 
              <Link className="nav-link" to="/addtocart">Cart</Link>
            </li> *
            
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                <i
                  className="fa fa-sign-in me-1"
                  style={{ color: "black" }}
                  aria-hidden="true"
                ></i>
                Login
              </Link>

            </li>
              
            */}
            {renderList()}
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
