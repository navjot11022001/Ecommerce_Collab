import React from 'react'
import { NavLink } from 'react-router-dom'
import Typical from "react-typical"
import "./home.css"
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
                        "Capture Your ",
                        300,
                        "Capture Your Moments With ",
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
                    src=""
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
  )
}

export default Home;