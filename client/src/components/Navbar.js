import React,{useContext} from "react";
import {Link,useHistory} from "react-router-dom";
const Navbar=()=>{
    return (
        
            <nav className="navbar  navbar-expand-lg navbar-dark">
    <div className="container">
      <Link className="navbar-brand" to="/"><i className="fas fa-shopping-basket"></i>Shopping Cart</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <Link className="nav-link" to="/products">Products</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/product/new">New</Link>
            </li>
            <li className="nav-item"> 
              <Link className="nav-link" to="/addtocart">Cart</Link>
            </li>
            <li className="nav-item"> 
              <Link className="nav-link" to="/login">Login</Link>
            </li>
        </ul>
    {/* <ul className="navbar-nav ml-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <Link className="nav-link" to="/register">SignUp</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
     
            <li className="nav-item">
             
              <Link to="/user/cart"  type="button" className="btn position-relative nav-link">
                <i className="fas fa-shopping-cart"></i>
                <span className="mt-2 position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              
                  <span className="visually-hidden">unread messages</span>
                </span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/logout">Logout</Link>
            </li>

        </ul>  */}
      </div>
    </div>
  </nav>
    
    )
}
export default Navbar;
