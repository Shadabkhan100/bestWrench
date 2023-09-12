import React, { useState, useEffect } from "react";
import { Carousel, Card, Modal } from "antd";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AllJob.css"; // Create a CSS file for custom styling

import Footer from "../footer";
import { Link, NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import ContactJob from "./ContactJob";
import { useSelector } from "react-redux";
const JobHeader = () => {
  const serviceData = useSelector((state) => state.postedJob.postedJob);
  const [selectedJob, setselectedJob] = useState();
  console.log(serviceData);
  const [Data, setData] = useState({
    title: "",
    desc: "",
    expert: "",
    location: "",
    duration: "",
    skill: "",
  });
  useEffect(() => {
    AOS.init({ duration: 4000 });
  }, []);
  const [showModal, setshowModal] = useState(false);
  const hadleApply = (index) => {
    setselectedJob(index);
    setshowModal(serviceData[index]);
    const title = serviceData[index].title;
    const desc = serviceData[index].description;
    const expert = serviceData[index].expertise;
    const location = serviceData[index].location;
    const duration = serviceData[index].total_duration;
    const skill = serviceData[index].skills;
    setData({ title, desc, expert, location, duration, skill });

    console.log(Data.title);
  };

  return (
    <div>
      <div
        className="container-fluid p-0  top-client-section"
        style={{ marginTop: "-1rem" }}
      >
        <Carousel id="header-carousel" autoplay>
          <div className="carousel-item active" style={{ height: "22rem" }}>
            <img
              className="w-100"
              style={{ height: "37rem" }}
              src="/headerImage1.jpg"
              alt="loading"
            />
            <Modal
              width={1500}
              data-os="fade-up"
              open={showModal}
              onCancel={() => setshowModal(false)}
            >
              <ContactJob
                Mytitle={Data.title}
                description={Data.desc}
                location={Data.location}
                expert={Data.expert}
                skills={Data.skill}
                duration={Data.duration}
                selectedJob={selectedJob}
              />
            </Modal>
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <div className="p-3" style={{ maxWidth: "700px" }}>
                <h1
                  className="display-3  mb-4 animated slideInDown"
                  style={{ fontWeight: "bold", color: "green" }}
                >
                  Discover Fast Mechnics Services
                </h1>
                <h6 className="section-title text-white text-uppercase mb-3 animated slideInDown ">
                  Post Job On Best Wrench
                </h6>
                <button className="btn btn-success animated slideInRight mx-3 my-3">
                  <Link
                    to={"http://localhost:3000/Become_Seller"}
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Give Service
                  </Link>
                </button>
                <button className="btn btn-success  animated slideInRight mx-2 ">
                  <Link
                    to={"http://localhost:3000"}
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Get Service
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="w-100"
              style={{ height: "37rem" }}
              src="/headreimgae2.jpg"
              alt="loading"
            />

            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <div className="p-3" style={{ maxWidth: "700px" }}>
                <h6 className="section-title text-white text-uppercase mb-3 animated slideInDown">
                  Top Mechnics
                </h6>
                <h1
                  className="display-3  mb-4 animated slideInDown"
                  style={{ fontWeight: "bold", color: "red" }}
                >
                  Discover Fast Quality Services
                </h1>
                <button className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft my-3">
                  <Link
                    to={"http://localhost:3000/Become_Seller"}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Give Service
                  </Link>
                </button>
                <button className="btn btn-light py-md-3 px-md-5 animated slideInRight">
                  <Link
                    to={"http://localhost:3000"}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Get Service
                  </Link>
                </button>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <img
              className="w-100"
              style={{ height: "37rem" }}
              src="/headerimage3.jpg"
              alt="loading"
            />

            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <div className="p-3" style={{ maxWidth: "700px" }}>
                <h6 className="section-title text-white text-uppercase mb-3 animated slideInDown">
                  Bring Service
                </h6>
                <h1
                  className="display-3  mb-4 animated slideInDown"
                  style={{ fontWeight: "bold", color: "red" }}
                >
                  Give Service We Will Make Earning Easy
                </h1>
                <button className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft my-3">
                  <Link
                    to={"http://localhost:3000/Become_Seller"}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Give Service
                  </Link>
                </button>
                <button className="btn btn-light py-md-3 px-md-5 animated slideInRight">
                  <Link
                    to={"http://localhost:3000"}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Get Service
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </Carousel>

        <div
          className="my-4"
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {serviceData.length > 0 ? (
            serviceData.map((jobs, index) => {
              return (
                <>
                  <Card
                    id="myCard"
                    className="myCrd mx-3 my-4"
                    style={{
                      border: ".2rem green solid",
                      cursor: "pointer",
                    }}
                    onClick={() => hadleApply(index)}
                  >
                    {/* <img
                    style={{ height: "100%", width: "100%" }}
                    src="/headerimage3.jpg"
                  ></img> */}
                    <h3 style={{ fontFamily: "fantasy" }}>{jobs.title}</h3>
                    <NavLink
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        fontSize: "1.4rem",
                      }}
                    >
                      <br />
                      {jobs.description}
                    </NavLink>
                    <h6 style={{ fontFamily: "monospace", fontWeight: "bold" }}>
                      <h5>Location:</h5> {jobs.location}
                    </h6>
                    {/* <h4>Skills and Expertise</h4>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        flexWrap: "wrap",
                      }}
                    >
                      <h5 className="mx-3" style={{ color: "lightgray" }}>
                        {jobs.expertise}
                      </h5>
                    </div> */}
                    {/* <h4>{jobs.duration}</h4> */}
                  </Card>
                </>
              );
            })
          ) : (
            <h2 className="text-center" style={{ color: "lightgray" }}>
              No Post Available
            </h2>
          )}
        </div>
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "center",

            flexWrap: "wrap",

            backgroundColor: "lightgray",
          }}
        ></div>
        <div style={{ marginTop: "8rem" }}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default JobHeader;
