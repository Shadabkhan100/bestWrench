import React from "react";
import { Button } from "antd";
import "./header.css";
import { NavLink } from "react-router-dom";
function Header({ PostTitle }) {
  return (
    <>
      <div className="header">
        <div className="Myheader">
          <div className="title" style={{ marginTop: "5rem" }}>
            <h1 className="my-2">Post In to get{PostTitle}</h1>
            <h2>get fast client from</h2>
            <h1 style={{ color: "red", fontFamily: "cursive" }}>BEST WRENCH</h1>

            <div>
              <h2 style={{ fontFamily: "serif" }}>Populer Services:</h2>
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
            <div className="image"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
