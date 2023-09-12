import React from "react";
import { Input, Button } from "antd";
import "./serviceheader.css";
import { SearchOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";

function ServiceHeader({ index }) {
  return (
    <>
      <div className="header">
        <div className="serviceheader">
          <div className="title" style={{ marginTop: "5rem" }}>
            <h1 className="my-2">Here is</h1>
            <h1 style={{ fontFamily: "serif" }}>{index}</h1>
            <h1> service, right away</h1>
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
              <h3 style={{ fontFamily: "serif" }}>Populer Services:</h3>
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
                  Millwrights
                </NavLink>
              </Button>

              <Button style={{ height: "100%" }} className="mx-2 my-2">
                <NavLink
                  to={"/Become_Seller"}
                  style={{ padding: "3rem 2rem", fontSize: "1.3rem" }}
                >
                  Welders
                </NavLink>
              </Button>
              <Button style={{ height: "100%" }} className="mx-2 my-2">
                <NavLink
                  to={"/Become_Seller"}
                  style={{ padding: "3rem 2rem", fontSize: "1.3rem" }}
                >
                  Plumber
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
                  HVAC
                </NavLink>
              </Button>
            </div>
          </div>

          <div className="sider">
            <div className="container"></div>
            <div className="image" style={{ marginTop: "5rem" }}></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServiceHeader;
