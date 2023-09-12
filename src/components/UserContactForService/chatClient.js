import { Button, Input } from "antd";
import React, { useState } from "react";
import { SendOutlined } from "@ant-design/icons";
import "./chat.css";
function ChatClient({ userName }) {
  const [message, setmessage] = useState("");
  const [Chat, setChat] = useState([]);

  const handlechat = () => {
    setChat([...Chat, { message }]);
    setmessage("");
  };
  const handleSubmit = () => {};
  return (
    <div className="container" style={{ marginTop: "8rem" }}>
      <h1 className="text-center">Say Hi To Mr {userName}</h1>
      <h1
        className="text-center"
        style={{ fontFamily: "sans-serif", color: "lightgray" }}
      >
        Best Wrench Chat Box
      </h1>

      <div className="justify-content-center">
        <div className="col-sm-13">
          <div className="card" style={{ borderRadius: "20px" }}>
            <form
              onSubmit={handleSubmit}
              style={{
                backgroundColor: "rgb(12, 155, 79)",
                padding: "5rem",
                borderRadius: "20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <h1
                  style={{ color: "rgb(253, 53, 53)", fontFamily: "fantasy" }}
                >
                  Chat On
                </h1>
                <img
                  style={{ height: "5rem", width: "15rem" }}
                  className="imagePost"
                  src="/logo.png"
                  alt="loading"
                ></img>
              </div>
              <Input
                className="myIn"
                value={message}
                onChange={(e) => setmessage(e.target.value)}
                placeholder="Say Hi....."
                style={{ fontSize: "1.5rem" }}
              />
              <Button className="my-3" onClick={handlechat}>
                Send{" "}
                <SendOutlined
                  style={{ fontSize: "1.3rem", color: "rgb(12, 155, 79)" }}
                />{" "}
              </Button>
            </form>
            <div className="card p-4 my-4" style={{ borderRadius: "20px" }}>
              {Chat.length !== 0 ? (
                <div style={{ display: "flex", flexDirection: "column" }}>
                  {Chat.map((e, index) => {
                    return (
                      <div key={index}>
                        <h4>{e.message}</h4>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <h3
                  className="text-center"
                  style={{ fontFamily: "sans-serif", color: "lightgray" }}
                >
                  No Chat
                </h3>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatClient;
