import React from "react";
import { Carousel, Button, Card } from "antd";
import "bootstrap/dist/css/bootstrap.min.css";
import "./route.css"; // Create a CSS file for custom styling
import MainNavbar from "../../OurServices/navbar";
import { HomeOutlined } from "@ant-design/icons";
import Footer from "../../footer";

const TopClient = () => {
  return (
    <>
      <MainNavbar />

      <div
        className="container-fluid p-0  top-client-section"
        style={{ marginTop: "-1rem" }}
      >
        <Carousel id="header-carousel">
          <div className="carousel-item active" style={{ height: "22rem" }}>
            <img
              alt="loading"
              className="w-100"
              style={{ height: "30rem" }}
              src="/headerimage3.jpg"
              alt="Image"
            />
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <div className="p-3" style={{ maxWidth: "700px" }}>
                <h1 className="display-3 text-white mb-4 animated slideInDown">
                  Best Wrench Top Client Details
                </h1>
                <h6 className="section-title text-white text-uppercase mb-3 animated slideInDown ">
                  Top Best Wrench Clients
                </h6>
                <Button className="btn btn-success animated slideInRight mx-2">
                  Get Service
                </Button>
                <Button className="btn btn-success  animated slideInRight mx-2 my-2">
                  Give Service
                </Button>
              </div>
            </div>
          </div>
          {/* <div className="carousel-item">
            <img  alt='loading' 
              className="w-100"
              src="data:image/jpeg;base64,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"
              alt="Image"
            />
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <div className="p-3" style={{ maxWidth: "700px" }}>
                <h6 className="section-title text-white text-uppercase mb-3 animated slideInDown">
                  Top Mechnics
                </h6>
                <h1 className="display-3 text-white mb-4 animated slideInDown">
                  Discover A Brand Luxurious Hotel
                </h1>
                <button className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">
                  Our Rooms
                </button>
                <button className="btn btn-light py-md-3 px-md-5 animated slideInRight">
                  Book A Room
                </button>
              </div>
            </div>
          </div> */}
        </Carousel>

        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "center",

            flexWrap: "wrap",
            padding: "1rem .2rem",
          }}
        >
          <Card className="myCrd mx-3" style={{ border: ".2rem green solid" }}>
            <img
              alt="loading"
              style={{ height: "60%", width: "100%" }}
              src="/images/team-1.jpg"
            ></img>
            <h3 style={{ fontFamily: "fantasy" }}>Mr Jhone</h3>
            <p style={{ display: "flex", flexWrap: "wrap" }}>
              Mr Jhone is top class mechnics have best experience <br /> in this
              feild and can work as a team or individual
            </p>
            <h6 style={{ fontFamily: "monospace", fontWeight: "bold" }}>
              +5 Years Experience
            </h6>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <HomeOutlined
                style={{
                  fontSize: "1.4rem",
                  color: "green",
                  fontWeight: "bold",
                }}
              />
              <h6
                className="my-2 mx-1"
                style={{ fontFamily: "serif", fontWeight: "bold" }}
              >
                Washengton DC, America
              </h6>
            </div>
            <p>Born on: 12/09/1988</p>
          </Card>

          <Card
            className="myCrd mx-3 my-2"
            style={{ border: ".2rem green solid" }}
          >
            <img
              alt="loading"
              style={{ height: "60%", width: "100%" }}
              src="/images/team-2.jpg"
            ></img>
            <h3 style={{ fontFamily: "fantasy" }}>Mr Deve</h3>
            <p style={{ display: "flex", flexWrap: "wrap" }}>
              Mr Jhone is top class mechnics have best experience <br /> in this
              feild and can work as a team or individual
            </p>
            <h6 style={{ fontFamily: "monospace", fontWeight: "bold" }}>
              +10 Years Experience
            </h6>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <HomeOutlined
                style={{
                  fontSize: "1.4rem",
                  color: "green",
                  fontWeight: "bold",
                }}
              />
              <h6
                className="my-2 mx-1"
                style={{ fontFamily: "serif", fontWeight: "bold" }}
              >
                Canbera the Cap, Australia
              </h6>
            </div>
            <p>Born on: 12/09/1980</p>
          </Card>

          <Card
            className="myCrd mx-3 my-2"
            style={{ border: ".2rem green solid" }}
          >
            <img
              alt="loading"
              style={{ height: "60%", width: "100%" }}
              src="/images/team-3.jpg"
            ></img>
            <h3 style={{ fontFamily: "fantasy" }}>Muhammad Afzal Khan</h3>
            <p style={{ display: "flex", flexWrap: "wrap" }}>
              Mr Afzal is top class mechnics have best experience <br /> in this
              feild and can work as a team or individual
            </p>
            <h6 style={{ fontFamily: "monospace", fontWeight: "bold" }}>
              +6 Years Experience
            </h6>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <HomeOutlined
                style={{
                  fontSize: "1.4rem",
                  color: "green",
                  fontWeight: "bold",
                }}
              />
              <h6
                className="my-2 mx-1"
                style={{ fontFamily: "serif", fontWeight: "bold" }}
              >
                Islamabad Cap Of , Pakistan
              </h6>
            </div>
            <p>Born on: 12/09/1990</p>
          </Card>

          <Card
            className="myCrd mx-3 my-2"
            style={{ border: ".2rem green solid" }}
          >
            <img
              alt="loading"
              style={{ height: "60%", width: "100%" }}
              src="/images/team-4.jpg"
            ></img>
            <h3 style={{ fontFamily: "fantasy" }}>Ankit Kummar</h3>
            <p style={{ display: "flex", flexWrap: "wrap" }}>
              Mr Ankit is top class mechnics have best experience <br /> in this
              feild and can work as a team or individual
            </p>
            <h6 style={{ fontFamily: "monospace", fontWeight: "bold" }}>
              +11 Years Experience
            </h6>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <HomeOutlined
                style={{
                  fontSize: "1.4rem",
                  color: "green",
                  fontWeight: "bold",
                }}
              />
              <h6
                className="my-2 mx-1"
                style={{ fontFamily: "serif", fontWeight: "bold" }}
              >
                New Dehli Cap Of , India
              </h6>
            </div>
            <p>Born on: 12/09/1970</p>
          </Card>
        </div>
        <div style={{ marginTop: "2rem" }}>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default TopClient;
