import { Avatar, Modal, Divider } from "antd";
import React from "react";
import "./noti.css";
import { ClockCircleOutlined } from "@ant-design/icons";
function Notifications({ Open, setOpen }) {
  const notiArray = [
    { message: "Hello i am jhone Hello i am jhone", time: "12:00PM" },
    { message: "Are you intrested Hello i am jhone", time: "1:3APM" },
    { message: "Project ready Hello i am jhone", time: "2:50PM" },
  ];
  return (
    <div>
      <Modal
        open={Open}
        onOk={() => setOpen(false)}
        okText="Notification Checked"
        onCancel={() => setOpen(false)}
      >
        <h3 style={{ fontFamily: "sans-serif" }}>Notifications</h3>
        <div className="notifications" style={{ backgroundColor: "gray" }}>
          {notiArray.map((e, index) => {
            return (
              <div key={index}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    padding: "1rem",
                  }}
                >
                  <Avatar src="/image2.jpg" className="mx-2" />
                  <h5>{e.message}</h5>
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

export default Notifications;
