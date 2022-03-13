import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Typical from "react-typical";
import "./home.css";
const Home = () => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
          <div className="row ">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    <Typical
                      steps={[
                        "Lets Get Your ",
                        300,
                        "Lets Get Your Cart Heavy!! ",
                        1000,
                      ]}
                      loop={Infinity}
                      className="hd"
                    />
                  </h1>{" "}
                  <h1>
                    <strong className="brand-name">Photo Junction </strong>
                  </h1>
                  <h2 className="my-3">
                    We are the team of talented Photographers and
                    Cinematographers 🎥 !
                  </h2>
                  <div className="mt-3">
                    <NavLink
                      exact
                      to="/products"
                      className="btn btn-outline-info btn-get-started mb-5"
                    >
                      Products
                    </NavLink>
                  </div>
                </div>

                <div className=" mrgn col-md-6 order-1 order-md-2">
                  <img
                    src="https://media.istockphoto.com/photos/pretty-young-woman-stylishly-dressed-in-a-straw-hat-with-color-bags-picture-id1033729610?k=20&m=1033729610&s=612x612&w=0&h=56u-S8LPU2gL5CO3kSF9wq_PV4kSY5oVl7Hhm-0fshg="
                    className="img-fluid animated"
                    alt="home img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
