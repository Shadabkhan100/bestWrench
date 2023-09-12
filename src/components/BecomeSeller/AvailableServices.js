import React, { useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";
import services from "../services.json";
import { Button, message } from "antd";
import { NavLink } from "react-router-dom";
import "./seller.css";
import "aos/dist/aos.css";
import AOS from "aos";
import Footer from "../footer";
import {
  ProjectOutlined,
  OrderedListOutlined,
  MoneyCollectFilled,
} from "@ant-design/icons";
const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [...state, { name: action.name }];
    default:
      return true;
  }
};
function AvailableServices() {
  const [state, dispatch] = useReducer(reducer, []);
  console.log(state);
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  let { index } = useParams();
  const findService = services.find((i) => i === index);
  console.log(findService);

  document.title = `Best_Wrench Seller`;

  const handelPosting = () => {
    dispatch({ type: "add", name: findService });
    message.success("Posted Job...");
  };
  return (
    <div>
      <h1
        id="headerText"
        className="text-center"
        data-aos="fade-down"
        style={{ fontFamily: "sans-serif" }}
      >
        You Can Choose The Category Below
      </h1>
      <div className="flex-container" style={{ margin: "2rem" }}>
        {services.map((pro, index) => {
          return (
            <div key={index}>
              <div key={"my"} className="myCard" data-aos="fade-up">
                <div key={"box"} className="myBox">
                  {/* <h1>{pro.title == index ? ` ${pro.title}` : ""}</h1>
                  <p>{pro.title == index ? ` ${pro.description}` : ""}</p> */}
                  <div key={"in"}>
                    <img
                      key={"image"}
                      src="../userRegistration/image.png"
                      alt="loading..."
                    ></img>
                    <h1 key={"head"}>{pro.title}</h1>
                    <p key={"para"} style={{ fontSize: "1.4rem" }}>
                      {pro.description}
                    </p>

                    <Button
                      key={5}
                      onClick={handelPosting}
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
                        to={`/PostService/${pro.title}`}
                      >
                        Post Service
                        <span
                          className="mx-3"
                          style={{
                            color: "white",
                            fontFamily: "bold",
                          }}
                        >
                          +
                        </span>
                        {/* <PlusCircleOutlined
                        className="mx-3"
                        style={{
                          fontSize: "2.3rem",
                          color: "white",
                          fontFamily: "bold",
                        }}
                      /> */}
                      </NavLink>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <h3
        style={{
          backgroundColor: "lightgray",
          padding: "2rem",
          marginTop: "2rem",
        }}
        className="text-center"
      >
        How Best Wrench Work
      </h3>
      <div
        style={{
          backgroundColor: "lightgray",
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          padding: "3rem",
          marginTop: "-3rem",
        }}
      >
        <div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            {" "}
            <ProjectOutlined style={{ fontSize: "5rem", color: "green" }} />
          </div>

          <h3>1. Create a Gig</h3>
          <p>
            Sign up for free, set up your Gig, and offer your work to our global
            audience.
          </p>
        </div>
        <div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            {" "}
            <OrderedListOutlined style={{ fontSize: "5rem", color: "green" }} />
          </div>
          <h3>2. Deliver great work</h3>
          <p>
            Get notified when you get an order and use our system to discuss
            details with customers.
          </p>
        </div>

        <div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            {" "}
            <MoneyCollectFilled style={{ fontSize: "5rem", color: "green" }} />
          </div>
          <h3>3. Get paid</h3>
          <p>
            Get paid on time, every time. Payment is available for withdrawal as
            soon as it clears.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AvailableServices;
