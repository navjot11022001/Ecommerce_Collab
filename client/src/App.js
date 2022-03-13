import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import AllProducts from "./components/screens/AllProducts";
import Home from "./components/screens/homescreen/Home";
import CreateProducts from "./components/screens/Createproduct";
import Addtocart from "./components/screens/Addtocart";
import Logger from "./components/screens/loginscreen/Logger";
import SearchBar from "./components/SearchBar";

const App = () => {
  return (
    <>
      <Navbar />
      
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/products">
          <AllProducts />
        </Route>

        <Route path="/addtocart">
          <Addtocart />
        </Route>

        <Route exact path="/product/new">
          <CreateProducts />
        </Route>

        <Route path="/login">
          <Logger />
        </Route>
      </Switch>
    </>
  );
};

export default App;
