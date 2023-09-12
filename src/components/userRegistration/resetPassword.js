import React from "react";
import { MailOutlined } from "@ant-design/icons";

import "../style/signUpHeader.css";
import { Button, Form, Input } from "antd";
import Loder from "../loader";
function ResetPassword(props) {
  const {
    resetPassword,
    setForgot,
    setLogin,
    setSignUp,
    loader,
    setResetEmail,
    resetEmail,
  } = props;
  return (
    <div>
      <div className="SignUpHeader">
        <img src="/logo.png" alt="loading"></img>
      </div>
      <h2 className="text-center my-3" style={{ color: "rgb(12, 155, 79)" }}>
        Login On{" "}
      </h2>
      <h1 style={{ fontFamily: "fantasy", color: "rgb(12, 155, 79)" }}>
        Best-Wrench
      </h1>

      <div style={{ display: loader }}>
        <Loder />
      </div>
      <Form name="basic" labelCol={{ span: 4 }} wrapperCol={{ span: 25 }}>
        <label style={{ fontSize: "1.4rem", padding: "0rem 1rem" }}>
          Email*
        </label>
        <Form.Item
          rules={[{ required: true, message: "Please input your userEmail!" }]}
        >
          <Input
            required
            name="email"
            value={resetEmail}
            type="email"
            onChange={(e) => setResetEmail(e.target.value)}
            style={{ margin: ".3rem 1rem", height: "3rem", fontSize: "1.4rem" }}
            prefix={<MailOutlined style={{ color: "rgb(4, 169, 1)" }} />}
            placeholder="Enter Email...."
          />
        </Form.Item>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
            htmlType="submit"
            style={{
              backgroundColor: "rgb(4, 169, 1)",
              color: "white",
              width: "20rem",
            }}
            onClick={resetPassword}
          >
            Send Password Reset Link
          </Button>
          <br />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "1rem",
          }}
        >
          <p
            onClick={() => {
              setLogin("none");
              setForgot("none", setSignUp(""));
            }}
            style={{
              cursor: "pointer",
              textDecoration: "underLine",
              color: "blue",
            }}
          >
            Try another way?
          </p>
        </div>
      </Form>
    </div>
  );
}

export default ResetPassword;
