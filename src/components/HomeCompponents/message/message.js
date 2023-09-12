import { Avatar, Modal, Divider } from "antd";
import React, { useState } from "react";
import "./mes.css";
import { ClockCircleOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
function Message({ setShowMessage, ShowMessage }) {
  const notiArray = [
    {
      message: "Hello i am jhone Hello i am jhone",
      time: "12:00PM",
      userName: "Nawaz Khan",
    },
    {
      message: "Are you intrested Hello i am jhone",
      time: "1:3APM",
      userName: "Bilal Khan",
    },
    {
      message: "Project ready Hello i am jhone",
      time: "2:50PM",
      userName: "Amjad Khan",
    },
  ];

  return (
    <div>
      <Modal
        open={ShowMessage}
        onOk={() => setShowMessage(false)}
        okText="Don'nt Want to chat"
        onCancel={() => setShowMessage(false)}
      >
        <h3 style={{ fontFamily: "sans-serif" }}>Messages</h3>
        <div className="notifications" style={{ cursor: "pointer" }}>
          {notiArray.map((e, index) => {
            return (
              <div key={index}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "1rem",
                  }}
                >
                  <div style={{ display: "flex" }}>
                    <Avatar src="/image2.jpg" className="mx-2" />
                    <h5>{e.userName}</h5>
                  </div>

                  <NavLink
                    style={{
                      color: "black",
                      fontWeight: "bold",
                      textDecoration: "none",
                      fontSize: "1rem",
                      padding: "0rem 2.7rem",
                    }}
                    to={`/contact/${e.userName}`}
                  >
                    {e.message}
                  </NavLink>
                </div>
                <div style={{ display: "flex", justifyContent: "right" }}>
                  <ClockCircleOutlined className="mx-3" />
                  <h6>{e.time}</h6>
                </div>

                <Divider style={{ color: "white" }} />
              </div>
            );
          })}
        </div>
      </Modal>
    </div>
  );
}

export default Message;
