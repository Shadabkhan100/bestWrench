import React from "react";
import { Link } from "react-router-dom";
function MainNavbar({ PostTitle }) {
  return (
    <div>
      {/* ..................................Main NavBar ........................*/}
      <div className="fixed-top">
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
              style={{ marginRight: "4rem" }}
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                <Link
                  className=" float-right btn btn-outline-success  "
                  style={{
                    color: "white",
                    fontSize: "1.4rem",
                    fontWeight: "bold",
                  }}
                  to={`/Become_Seller`}
                >
                  Back To Choose Service
                </Link>
                <Link
                  className=" btn btn-outline-success "
                  style={{
                    color: "white",
                    fontSize: "1.4rem",
                    fontWeight: "bold",
                  }}
                  to={"/"}
                >
                  ABOUT
                </Link>
                <Link
                  className=" btn btn-outline-success "
                  style={{
                    color: "white",
                    fontSize: "1.4rem",
                    fontWeight: "bold",
                  }}
                  to={"/"}
                >
                  Top Clients
                </Link>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default MainNavbar;
