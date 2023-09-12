import React from "react";
import { Input, Button } from "antd";
import "./seller.css";
import { SearchOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";

function SellerHeader() {
  return (
    <>
      <div className="header ">
        <div className="Header">
          <div className="title" style={{ marginTop: "5rem" }}>
            <h3 className="my-2">Hay Mr </h3>
            <h1 style={{ fontFamily: "serif" }}>Ahmad Khan</h1>
            <h3> Join our growing Mechanics community</h3>
            <Input
              placeholder="Search For service"
              className="search my-4"
              style={{ fontSize: "1.5rem" }}
              suffix={
                <SearchOutlined
                  style={{
                    color: "green",
                    fontSize: "2rem",
                    cursor: "pointer",
                  }}
                />
              }
            />
            <div>
              <h3 style={{ fontFamily: "serif" }}>Popular Services:</h3>
              <Button style={{ height: "100%" }} className="mx-2 my-2">
                <NavLink
                  to={"/Become_Seller"}
                  style={{ padding: "3rem 2rem", fontSize: "1.3rem" }}
                >
                  Mechanics
                </NavLink>
              </Button>
              <Button style={{ height: "100%" }} className="mx-2 my-2">
                <NavLink
                  to={"/Become_Seller"}
                  style={{ padding: "3rem 2rem", fontSize: "1.3rem" }}
                >
                  Automotive
                </NavLink>
              </Button>

              <Button style={{ height: "100%" }} className="mx-2 my-2">
                <NavLink
                  to={"/Become_Seller"}
                  style={{ padding: "3rem 2rem", fontSize: "1.3rem" }}
                >
                  Heavy Duty
                </NavLink>
              </Button>

              <Button style={{ height: "100%" }} className="mx-2 my-2">
                <NavLink
                  to={"/Become_Seller"}
                  style={{ padding: "3rem 2rem", fontSize: "1.3rem" }}
                >
                  Electricians
                </NavLink>
              </Button>

              <Button style={{ height: "100%" }} className="mx-2 my-2">
                <NavLink
                  to={"/Become_Seller"}
                  style={{ padding: "3rem 2rem", fontSize: "1.3rem" }}
                >
                  Commercial
                </NavLink>
              </Button>
            </div>
          </div>

          <div className="sider">
            <div className="image"></div>
          </div>
        </div>
        {/* <h2
          style={{ marginTop: "-20rem", color: "white" }}
          className="text-center"
        >
          Work Your Way
        </h2> */}
        {/* <h5
          className="text-center"
          style={{ fontSize: "1.5rem", color: "white" }}
        >
          You bring the skill. We'll make earning easy.<br></br>
          <button
            className="btn btn-primary text-center my-3"
            style={{ fontSize: "1.4rem" }}
          >
            <NavLink
              style={{ textDecoration: "none", color: "white" }}
              to={"/MainService/none"}
            >
              I want to get service
            </NavLink>
          </button>
        </h5> */}
      </div>
    </>
  );
}

export default SellerHeader;
