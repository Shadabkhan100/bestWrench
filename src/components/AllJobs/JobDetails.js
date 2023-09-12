import { Card, Upload, Button, Space, Carousel } from "antd";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { FileOutlined, CheckCircleOutlined } from "@ant-design/icons"; // Import Ant Design icons
import React from "react";

import Footer from "../footer";
import MainNavbar from "../OurServices/navbar";

function JobDetails() {
  const { title } = useParams();
  const serviceData = useSelector((state) => state.postedJob.postedJob);

  // Find the object with the matching title
  const selectedService = serviceData.find((item) => item.title === title);
  console.log(selectedService);
  if (!selectedService) {
    return (
      <div>
        <h2 className="text-center">You Have Not Selected Any Job</h2>{" "}
      </div>
    ); // Handle the case where no matching object is found
  }

  const {
    title: serviceTitle,
    coverLetter,
    attachments,
    location,
    expertise,
    description,
    total_duration,
    skills,
  } = selectedService;

  return (
    <div>
      <MainNavbar />

      <div
        className="container-fluid p-0  top-client-section"
        style={{ marginTop: "-1rem" }}
      >
        <Carousel id="header-carousel" autoplay>
          <div className="carousel-item active" style={{ height: "22rem" }}>
            <img
              className="w-100"
              style={{ height: "37rem" }}
              src="https://img.freepik.com/free-photo/car-mechanic-wearing-white-uniform-stand-holding-wrench_1150-16607.jpg?w=740&t=st=1694514153~exp=1694514753~hmac=e6395a9fe8b946f94b5db7f1672aca872294e04624e3bc94772b11441b94842e"
              alt="loading"
            />

            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <div className="p-3" style={{ maxWidth: "700px" }}>
                <h1
                  className="display-3  mb-4 animated slideInDown"
                  style={{ fontWeight: "bold", color: "green" }}
                >
                  className= Discover Fast Mechnics Services
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
              src="https://img.freepik.com/free-photo/mechanic-servicing-car_1170-1689.jpg?w=740&t=st=1694514413~exp=1694515013~hmac=821c3841198b7d461b0de480d7ae0f2bd3a40714a903c5f797c68a48ebde974f"
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
      </div>

      <div style={{ marginTop: "-1rem" }}>
        <h3 className="text-center my-4">Job Details</h3>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Card
            style={{
              width: "98%",
              border: ".2rem solid black",
              alignItems: "center",
            }}
          >
            <h3 className="text-center">{serviceTitle}</h3>
            <Card>
              <Card
                style={{
                  border: ".2rem solid black",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <h5>{expertise}</h5>
                <p style={{ fontSize: "1.4rem" }}>{description}</p>
                <h4>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="bi bi-calendar-check-fill"
                    viewBox="0 0 16 16"
                    style={{ color: "green" }}
                  >
                    <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-5.146-5.146-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                  </svg>{" "}
                  {total_duration}
                </h4>
                <h4 className="my-4" style={{ color: "green" }}>
                  Skills
                </h4>

                <Space direction="vertical">
                  {skills && skills.length > 0 ? (
                    selectedService.skills.map((skill, index) => (
                      <Button key={index}>
                        <CheckCircleOutlined /> {skill}
                      </Button>
                    ))
                  ) : (
                    <div>No skills</div>
                  )}
                </Space>
                <h4 className="my-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="bi bi-geo-alt-fill"
                    viewBox="0 0 16 16"
                    style={{ color: "green" }}
                  >
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                  </svg>
                  {location}
                </h4>
              </Card>
            </Card>
            <h4 style={{ color: "green" }}>Cover Letter</h4>
            <textarea
              style={{ fontSize: "1.4rem", fontWeight: "bold" }}
              className="w-100 form-control" // Using Bootstrap form-control class
              name="jobDetails"
              id="jobDetails"
              cols="30"
              rows="10"
              placeholder="Enter Belief Details...."
              value={coverLetter}
              readOnly // Make it read-only if necessary
            ></textarea>

            <h4 className="my-4" style={{ color: "green" }}>
              Attachments
            </h4>

            <Card style={{ backgroundColor: "lightgray" }}>
              <Space direction="vertical">
                {attachments && attachments.length > 0 ? (
                  attachments.map((attachment, index) => (
                    <div key={index}>
                      <FileOutlined /> {attachment.name}
                    </div>
                  ))
                ) : (
                  <div>No attachments</div>
                )}
                <Upload>
                  <Button icon={<FileOutlined />}>Upload File</Button>
                </Upload>
              </Space>
            </Card>
          </Card>
        </div>
      </div>
      {/* <MainNavbar /> */}
      <Footer />
    </div>
  );
}

export default JobDetails;
