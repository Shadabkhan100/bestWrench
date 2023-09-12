import React, { useContext } from "react";

import { Link } from "react-router-dom";
import "../style/nav.css";
import { myContext } from "../../App";

function ProfileNavbar() {
  const a = useContext(myContext);
  let LoggedIn = a.IsLoggedIn;
  return (
    <div>
      {/* ..................................Main NavBar ........................*/}
      <div>
        <nav
          className="navbar navbar-expand-lg bg-success "
          style={{ padding: "1.4rem 1rem", width: "100%" }}
        >
          <div className="container-fluid">
            <img style={{ height: "3.5rem" }} src="/logo.png" alt="loading" />
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <button
                  className="ant-dropdown-link btn btn-outline-success float-left"
                  onClick={(e) => e.preventDefault()}
                  style={{ color: "white", fontSize: "1.4rem" }}
                >
                  <Link to={"/"}>Home</Link>
                </button>
                <button
                  className="btn btn-outline-success "
                  type="submit"
                  style={{ color: "white", fontSize: "1.4rem" }}
                >
                  <Link
                    style={{
                      color: "white",
                      fontSize: "1.4rem",
                      textDecoration: "none",
                    }}
                    to={"/"}
                  >
                    Top Rated Sellers
                  </Link>
                </button>
              </ul>

              {LoggedIn ? (
                <>
                  <div className="d-flex" role="search">
                    <button
                      className="btn btn-outline-success mx-2"
                      style={{
                        color: "white",
                        fontSize: "1.4rem",
                        fontWeight: "bold",
                        backgroundColor: "rgb(2, 107, 69)",
                      }}
                    >
                      Log Out
                    </button>
                  </div>
                </>
              ) : (
                ""
              )}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default ProfileNavbar;
