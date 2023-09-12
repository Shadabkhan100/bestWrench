import React, { useState, useEffect, useContext } from "react";
import { Modal, Dropdown, Avatar } from "antd";
import SignUpModal from "../userRegistration/SignUpModal";
import OnlySignIn from "../userRegistration/onlySignIn";
import services from "../services.json";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "../style/nav.css";
import { BellOutlined, MessageOutlined } from "@ant-design/icons";
import { myContext } from "../../App";
import Notifications from "./notifications/Notifications";
import Message from "./message/message";

function MainNavbar() {
  const [Open, setOpen] = useState(false);
  const navigate = useNavigate();
  let userProfile =
    "data:image/jpeg;base64,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";
  const user = { id: 1, name: "Nawaz", profession: "students" };
  const a = useContext(myContext);
  let LoggedIn = a.IsLoggedIn;
  let setLoggedIn = a.setIsLoggedIn;
  const [showModal, setshowModal] = useState(false);
  const [ShowMessage, setShowMessage] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setshowModal(true);
    }, 4000);
  }, []);

  const [Login, setLogin] = useState("none");
  const [myLogin, setmyLogin] = useState(false);
  const handleLogin = () => {
    setmyLogin(true);
    setLogin("");
  };
  const handleMessege = () => {
    setShowMessage(true);
    // navigate("/contact/notification");
  };
  return (
    <div>
      <Notifications Open={Open} setOpen={setOpen} />
      <SignUpModal showModal={showModal} setshowModal={setshowModal} />
      <Message ShowMessage={ShowMessage} setShowMessage={setShowMessage} />
      {/* -----------------------My Login Form -----------------------*/}
      <Modal
        open={myLogin}
        okText={"haven't Account"}
        onOk={() => setmyLogin(false)}
        onCancel={() => setmyLogin(false)}
      >
        <div style={{ display: Login }}>
          <OnlySignIn />
        </div>
      </Modal>

      {/* ..................................Main NavBar ........................*/}
      <div className="fixed-top">
        <nav
          className="navbar navbar-expand-lg bg-success"
          style={{ marginTop: "-1rem", padding: "2.4rem 1rem", width: "100%" }}
        >
          <div className="container-fluid">
            <img
              className="image"
              style={{ height: "3.5rem" }}
              src="/logo.png"
              alt="loading"
            />
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
                <Dropdown
                  menu={{
                    items: services.map((service, index) => ({
                      key: service.id,
                      label: (
                        <NavLink
                          key={index}
                          className="NaveLink"
                          rel="noopener noreferrer"
                          to={`/MainService/${service.title}`}
                        >
                          {service.title}
                        </NavLink>
                      ),
                    })),
                  }}
                  placement="bottom"
                  arrow={{
                    pointAtCenter: true,
                  }}
                >
                  <button
                    className="ant-dropdown-link btn btn-outline-success float-left"
                    onClick={(e) => e.preventDefault()}
                    style={{ color: "white", fontSize: "1.4rem" }}
                  >
                    Our Latest Service
                  </button>
                </Dropdown>

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
                    to={"/Become_Seller"}
                  >
                    Become Seller
                  </Link>
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
                    to={"/jobs"}
                  >
                    Looking For Jobs
                  </Link>
                </button>
              </ul>

              {LoggedIn ? (
                <>
                  <div className="d-flex" role="search">
                    <button
                      onClick={() => {
                        setLoggedIn(false);
                      }}
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
                    <div style={{ display: "flex" }}>
                      <NavLink
                        className={"mx-2"}
                        to={`/Profile/${user.name}`}
                        style={{
                          fontSize: "1rem",
                          margin: "auto",
                          color: "white",
                        }}
                      >
                        Profile{" "}
                      </NavLink>{" "}
                      <Avatar
                        shape="circle"
                        size={50}
                        src={userProfile}
                        style={{ margin: "auto" }}
                      />
                    </div>
                    <BellOutlined
                      className="notfication mx-2"
                      style={{
                        margin: "auto",
                      }}
                      onClick={() => setOpen(true)}
                    />
                    <MessageOutlined
                      className="notfication "
                      style={{
                        margin: "auto",
                      }}
                      onClick={handleMessege}
                    />
                  </div>
                </>
              ) : (
                <div className="d-flex" role="search">
                  <button
                    onClick={handleLogin}
                    className="btn btn-outline-success  mx-5"
                    type="submit"
                    style={{
                      color: "white",
                      fontSize: "1,4rem",
                      fontWeight: "bold",
                    }}
                  >
                    Login
                  </button>
                  <button
                    onClick={() => {
                      setshowModal(true);
                      navigate("/");
                    }}
                    className="btn btn-outline-success mx-1"
                    style={{
                      color: "white",
                      fontSize: "1.4rem",
                      fontWeight: "bold",
                      backgroundColor: "rgb(2, 107, 69)",
                    }}
                  >
                    Register
                  </button>
                </div>
              )}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default MainNavbar;
