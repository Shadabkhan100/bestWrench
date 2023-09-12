import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import services from "../services.json";
import MyNavbar from "./navbar";
import ServiceHeader from "./ServiceHeader";
import { PhoneOutlined, SaveOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { Button, Select, message } from "antd";
import { NavLink } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import "./Service.css";
import "aos/dist/aos.css";
import AOS from "aos";
import Footer from "../footer";
import { addService } from "../AllUserRedux/store";
const { Option } = Select;
function Services() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.user.value); // UserReg reducer
  const serviceData = useSelector((state) => state.items.items); // ServiceRedux reducer

  const [Progress, setProgress] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  let { index } = useParams();
  const addToCart = (index) => {
    try {
      let title = services[index].title;
      let description = services[index].description;
      let experience = "+3 Years";
      dispatch(addService({ title, description, experience }));
      message.success("Order has been saved");
      console.log(serviceData);
    } catch (error) {
      message.error("Order is not saved");
    }
  };
  document.title = `Best_Wrench ${index}`;
  setTimeout(() => {
    setProgress(100);
  }, 2000);
  const [FilterService, setFilterService] = useState(
    "Filter Available Services"
  );
  const handleFilter = (e) => {
    setFilterService(e);
  };
  return (
    <div>
      <MyNavbar />
      <LoadingBar color="red" progress={Progress} height={4} />
      <ServiceHeader index={index} />
      <div className="bg-success p-4" style={{ marginTop: "-10rem" }}>
        <h1 id="headerText" className="text-center">
          Services Available for {index}
        </h1>
        <Select
          value={FilterService}
          onChange={(e) => handleFilter(e)}
          className="filter"
        >
          <Option value="Year OF Experience">Year OF Experience</Option>
          <Option value="By Licensed">By Licensed</Option>
          <Option value="PickUp Or Delivery">PickUp Or Delivery</Option>
          <Option value="By location">Nearest Location</Option>
        </Select>
      </div>
      <div className="flex-cat">
        {services.map((pro, index) => {
          return (
            <div key={index}>
              <div className="Card" data-aos="fade-up">
                <div className="Box" key={pro.id}>
                  {/* <h1>{pro.title == index ? ` ${pro.title}` : ""}</h1>
                  <p>{pro.title == index ? ` ${pro.description}` : ""}</p> */}
                  <img
                    style={{ height: "100%", width: "100%" }}
                    alt="loading"
                    src="/header.png"
                  ></img>
                  <h1>Name:{pro.title}</h1>
                  <p style={{ fontSize: "1.4rem" }}>Title:{pro.description}</p>
                  <p>Experience: 2 years</p>
                  <Button
                    className="mx-1 my-2"
                    style={{
                      height: "3.2rem",
                      width: "100%",
                      backgroundColor: "rgb(12, 155, 79)",
                      borderRadius: "20px",
                    }}
                  >
                    <NavLink
                      className={"mx-2"}
                      style={{
                        fontSize: "1.4rem",
                        textDecoration: "none",
                      }}
                      to={`/contact/${pro.title}`}
                    >
                      <PhoneOutlined
                        className="mx-2"
                        style={{
                          fontSize: "2rem",
                          color: "white",
                        }}
                      />
                      Contact Us
                    </NavLink>
                  </Button>
                  <Button
                    className="mx-1"
                    onClick={() => addToCart(index)}
                    style={{
                      height: "3.2rem",
                      width: "100%",
                      backgroundColor: "rgb(12, 155, 79)",
                      borderRadius: "20px",
                      fontSize: "1.6rem",
                    }}
                  >
                    <SaveOutlined
                      className="mx-2"
                      style={{
                        fontSize: "2rem",
                        color: "white",
                      }}
                    />
                    Save
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <h1 className="container text-center my-2" style={{ color: "lightgray" }}>
        New element Added
      </h1>
      <div className="flex-cat">
        {data.map((pro, index) => {
          return (
            <div key={index}>
              <div className="Card" data-aos="fade-up">
                <div className="Box" key={pro.id}>
                  {/* <h1>{pro.title == index ? ` ${pro.title}` : ""}</h1>
                  <p>{pro.title == index ? ` ${pro.description}` : ""}</p> */}
                  <img
                    style={{ height: "100%", width: "100%" }}
                    alt="loading"
                    src="/header.png"
                  ></img>
                  <h1>Title:{pro.title}</h1>
                  <p style={{ fontSize: "1.4rem" }}>{pro.description}</p>
                  <p>Experience: {pro.experience}</p>
                  <Button
                    className="mx-1 my-2"
                    style={{
                      height: "3.2rem",
                      backgroundColor: "rgb(12, 155, 79)",
                      borderRadius: "20px",
                    }}
                  >
                    <NavLink
                      className={"mx-2"}
                      style={{
                        fontSize: "1.4rem",
                        textDecoration: "none",
                      }}
                      to={`/contact/${pro.title}`}
                    >
                      <PhoneOutlined
                        style={{
                          fontSize: "2.3rem",
                          color: "white",
                        }}
                      />
                      Contact Us
                    </NavLink>
                  </Button>
                  <Button
                    className="mx-1"
                    onClick={() => addToCart(index)}
                    style={{
                      height: "3.2rem",
                      backgroundColor: "rgb(12, 155, 79)",
                      borderRadius: "20px",
                    }}
                  >
                    Save
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default Services;
