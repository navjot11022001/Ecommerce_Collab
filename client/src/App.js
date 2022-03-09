import React from 'react';
import "./App.css"
import {Switch,Route} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./components/Navbar"
import AllProducts from "./components/screens/AllProducts"
import Home from "./components/screens/Home"
import CreateProducts from "./components/screens/Createproduct"
import Addtocart from "./components/screens/Addtocart"

const App=()=> {
  return (
   <>
   
   <Navbar/>
   <Switch >
<Route exact path="/">

<Home/>
</Route>

<Route path="/products">

<AllProducts/>
</Route>

<Route path="/addtocart">

<Addtocart/> 
</Route>

<Route exact path="/product/new">
<CreateProducts/>
</Route>

   </Switch>
   </>
  );
}

export default App;
 