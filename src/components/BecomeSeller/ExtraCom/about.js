import React from "react";
import MainNavbar from "../../OurServices/navbar";
import Footer from "../../footer";
import "./route.css";
import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      <MainNavbar />

      <div class="about">
        <div class="container">
          <div class="row d_flex align-items-center">
            <div class="col-md-6">
              <div class="mt-4">
                <h1
                  class="text-center"
                  style={{ color: "green", fontWeight: "bold" }}
                >
                  ABOUT US
                </h1>
                <h2
                  class="text-center"
                  style={{
                    color: "gray",
                    fontWeight: "bold",
                    marginTop: "5rem",
                  }}
                >
                  Welcome TO OUR Mechanics Hub
                </h2>
                <p
                  style={{
                    color: "black",
                    fontSize: "1.6rem",
                    textAlign: "center",
                  }}
                >
                  Best Wrench Help us to provide the fast and efficient services
                  all over the world. You bring the service we will make it easy
                  to earn more money{" "}
                </p>
                <button className="btn btn-success">
                  <Link
                    to={""}
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Start Selling
                  </Link>{" "}
                </button>
              </div>
            </div>
            <div class="col-md-6">
              <div class="about_img">
                <img className="myimage" src="/basHand.jpg" alt="#" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="services">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="titlepage">
                <h2>
                  {" "}
                  <br></br>
                  <h2
                    class="text-center my-4"
                    style={{ color: "green", fontWeight: "bold" }}
                  >
                    What Is Our Quality
                  </h2>
                </h2>
              </div>
            </div>
            <div class="col-md-3 col-sm-6">
              <div id="ho_color" class="services_main">
                <i>
                  <img src="images/services_icon1.png" alt="#" />
                </i>
                <img class="ho" src="images/services_icon1h.png" alt="#" />
                <h3 style={{ color: "blue", fontWeight: "bold" }}>
                  Safe & Secure
                </h3>
                <p>
                  We are providing the safe and secure service for Best Wrench
                  clients and seller all over the world.
                </p>
                <button class="btn btn-success" href="#">
                  Read More
                </button>
              </div>
            </div>
            <div class="col-md-3 col-sm-6">
              <div id="ho_color" class="services_main">
                <img class="ho" src="images/services_icon2h.png" alt="#" />
                <h3 style={{ color: "blue", fontWeight: "bold" }}>
                  Mobile Apps
                </h3>
                <p>
                  Mobile App is available for Best Wrench which help the clients
                  and seller all over the world
                </p>
                <button class="btn btn-success" href="#">
                  Read More
                </button>
              </div>
            </div>
            <div class="col-md-3 col-sm-6">
              <div id="ho_color" class="services_main">
                <i>
                  <img src="images/services_icon3.png" alt="#" />
                </i>
                <img class="ho" src="images/services_icon3h.png" alt="#" />
                <h3 style={{ color: "blue", fontWeight: "bold" }}>Wallet</h3>
                <p>
                  Secure wallet which is 100% secure and fast for clients and
                  seller on best wrench all over the world
                </p>
                <button class="btn btn-success" href="#">
                  Read More
                </button>
              </div>
            </div>
            <div class="col-md-3 col-sm-6">
              <div id="ho_color" class="services_main">
                <i>
                  <img src="images/services_icon4.png" alt="#" />
                </i>
                <img class="ho" src="images/services_icon4h.png" alt="#" />
                <h3 style={{ color: "blue", fontWeight: "bold" }}>
                  Experts Support
                </h3>
                <p>
                  We are providing the expert individual support which make best
                  wrench strong internationally
                </p>
                <button class="btn btn-success" href="#">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bitcoins">
        <div class="container">
          <div class="row">
            <div class="col-md-8 offset-md-2">
              <div class="titlepage">
                <h2
                  class="text-center"
                  style={{
                    color: "green",
                    fontWeight: "bold",
                    marginTop: "3rem",
                  }}
                >
                  Get and Give Services
                </h2>
                <h2 className="my-3" style={{ color: "darkgray" }}>
                  Why are so many people choose best wrench for services{" "}
                </h2>
              </div>
            </div>
            <div class="col-md-8 offset-md-2">
              <div class="bitcoins_main">
                <img className="bitImage" src="images/bitcoins.jpg" alt="#" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
