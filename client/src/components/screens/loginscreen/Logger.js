import React, { useState } from "react";

import "./logger.css";
import log from "./img/log.jpg";
import registerImg from "./img/registerImg.jpg";

function Logger() {
  const [clicked, setClicked] = useState(false);

  const handleSignUpClick = () => {
    setClicked(true);
  };

  const handleSignInClick = () => {
    setClicked(false);
  };

  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  const handleLoginChange = (e) => {
    console.log("Entered LoginChange");
    const { name, value } = e.target;
    setUserLogin({
      ...userLogin,
      [name]: value,
    });
  };

  
  const [userSignup, setUserSignup] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: "",
  });

  const handleRegisterChange = (e) => {
    console.log("Entered Register Change");
    const { name, value } = e.target;
    setUserSignup({
      ...userSignup,
      [name]: value,
    });
  };

  // const register = () => {
  //   console.log("Entered Register");
  //   const { name, email, password, reEnterPassword } = userSignup;
  //   if (name && email && password && password === reEnterPassword) {
  //     axios.post("http://localhost:9000/register", userSignup).then((res) => {
  //       alert(res.data.message);
  //     });
  //   } else {
  //     alert("Invalid Inputs");
  //   }
  // };

  return (
    <div className={`appcontainer ${clicked ? "sign-up-mode" : ""}`}>
      <div className="forms-appcontainer">
        <div className="signin-signup">
          <form action="#" className="sign-in-form">
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input
                name="email"
                type="text"
                placeholder="Email Address"
                value={userLogin.email}
                onChange={handleLoginChange}
                required
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input
                name="password"
                type="password"
                placeholder="Password"
                value={userLogin.password}
                onChange={handleLoginChange}
                required
              />
            </div>
            <input
              type="submit"
              value="Login"
              onClick=""
              className="btn solid"
            />
          </form>
          <form action="#" className="sign-up-form">
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input
                type="text"
                placeholder="Name"
                name="name"
                onChange={handleRegisterChange}
                required
              />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input
                type="text"
                placeholder="Email Address"
                name="email"
                onChange={handleRegisterChange}
                required
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleRegisterChange}
                required
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                placeholder="Confirm password"
                name="reEnterPassword"
                onChange={handleRegisterChange}
                required
              />
            </div>
            <input
              onClick={()=>console.log("fs")}
              type="submit"
              className="btn"
              value="Sign up"
            />
          </form>
        </div>
      </div>

      <div className="panels-appcontainer">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>Register with us for easy login in future.</p>
            <button onClick={handleSignUpClick} className={" btn transparent"}>
              Sign up
            </button>
          </div>
          <img src={log} className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>Sign in to your account.</p>
            <button onClick={handleSignInClick} className="btn transparent">
              Sign in
            </button>
          </div>
          <img src={registerImg} className="image" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Logger;