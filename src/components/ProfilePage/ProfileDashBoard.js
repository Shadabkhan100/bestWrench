import React, { useEffect } from "react";
import { message, Col, Card, Avatar, Space, Button } from "antd";
import AOS from "aos";
import { CheckCircleOutlined } from "@ant-design/icons";
import "aos/dist/aos.css";
import "./profile.css";
import { useDispatch, useSelector } from "react-redux";
import { remove, removeJob } from "../AllUserRedux/store";
import { NavLink } from "react-router-dom";

const { Meta } = Card;

const ProfileDashBoard = () => {
  const dispatch = useDispatch();
  const serviceData = useSelector((state) => state.items.items);
  const jobData = useSelector((state) => state.postedJob.postedJob);
  console.log(jobData);
  const totalElementSaved = serviceData.length;
  console.log(JSON.stringify(serviceData));
  const handleRemove = (index) => {
    dispatch(remove(index));
    message.success("Order is been removed");
  };
  const RemoveJob = (index) => {
    dispatch(removeJob(index));
  };
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    address: "chakdara pakistan",
    number: "03223232243",
    Account_Status: "Buyer And Seller",
    Experience: "3 Years",
    avatar:
      "data:image/jpeg;base64,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", // Replace with user's profile picture URL
  };
  // const handleRemove = (index) => {
  //   dispatch(remove(index));
  //   message.success(index);
  // };

  return (
    <div className="profile-container" style={{ marginTop: "10rem" }}>
      {/* User Profile */}
      <Col xs={24} sm={24} md={12} lg={8}>
        <Card
          className="profile-card"
          data-aos="fade-right"
          style={{ justifyContent: "center" }}
        >
          <Meta
            avatar={<Avatar size={50} src={user.avatar} />}
            title={user.name}
            description={user.email}
          />
          <div style={{ marginTop: "3rem" }}>
            <h4>Address:</h4>
            <h5 style={{ color: "lightgrey" }}> {user.address}</h5>
            <h4>Phone Number:</h4>
            <h5 style={{ color: "lightgrey" }}> {user.number}</h5>
            <h4>Experiece:</h4>
            <h5 style={{ color: "lightgrey" }}> {user.Experience}</h5>
          </div>
        </Card>
      </Col>

      {/* Saved Products */}
      <Col xs={24} sm={24} md={12} lg={16}>
        <div className="saved-products" data-aos="fade-left">
          <h2 className="section-title">Saved Services</h2>
          <Card>
            <Col xs={24}>
              <h3 className="text-center">
                {totalElementSaved === 0
                  ? "--------------You have'nt Savde Any Element--------------------"
                  : ""}
              </h3>

              {serviceData.map((service, index) => {
                return (
                  <>
                    <Card
                      key={index}
                      className="service-card"
                      style={{ marginBottom: "1rem" }}
                    >
                      <h3>{service.title}</h3>
                      <p>{service.description}</p>
                      <p>Experience: {service.experience}</p>
                      <button className="btn btn-success mx-3">
                        <NavLink
                          style={{ textDecoration: "none", color: "white" }}
                          to={`http://localhost:3000/contact/${service.title}`}
                        >
                          Contact
                        </NavLink>{" "}
                      </button>
                      <button
                        className="btn btn-success"
                        onClick={() => handleRemove(index)}
                      >
                        Remove
                      </button>
                    </Card>
                  </>
                );
              })}
            </Col>
          </Card>
        </div>
      </Col>

      <Col xs={24} sm={24} md={12} lg={16}>
        <div className="saved-products" data-aos="fade-left">
          <h2 className="section-title">Posted Jobs</h2>
          <Card>
            <Col xs={24}>
              <h3 className="text-center">
                {jobData.length === 0
                  ? "--------------You have'nt Post Any Job--------------------"
                  : ""}
              </h3>

              {jobData.map((service, index) => {
                return (
                  <>
                    <Card
                      key={index}
                      className="service-card"
                      style={{ marginBottom: "1rem" }}
                    >
                      <h3>{service.title}</h3>
                      <p>{service.description}</p>
                      <p>Experience: {service.experience}</p>

                      <h4 className="my-4" style={{ color: "green" }}>
                        Skills
                      </h4>

                      <Space direction="vertical">
                        {service.skills && service.skills.length > 0 ? (
                          service.skills.map((skill, index) => (
                            <Button key={index}>
                              <CheckCircleOutlined /> {skill}
                            </Button>
                          ))
                        ) : (
                          <div>No skills</div>
                        )}
                      </Space>
                      <h3>{service.location}</h3>

                      <button
                        className="btn btn-success"
                        onClick={() => RemoveJob(index)}
                      >
                        Remove
                      </button>
                    </Card>
                  </>
                );
              })}
            </Col>
          </Card>
        </div>
      </Col>
    </div>
  );
};

export default ProfileDashBoard;
