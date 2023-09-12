import React from "react";
import { LockOutlined, MailOutlined } from "@ant-design/icons";

import "../style/signUpHeader.css";
import { Button, Form, Input } from "antd";
import Loder from "../loader";

function SignInModal(props) {
  const {
    loginData,
    handleloginChange,
    setForgot,
    setLogin,
    setSignUp,
    loader,
  } = props;
  return (
    <div>
      <div>
        <div className="SignUpHeader">
          <img src="/logo.png" alt="loading"></img>
        </div>
        <h2 className="text-center my-3" style={{ color: "rgb(12, 155, 79)" }}>
          Login to your
        </h2>
        <h1
          className="text-center"
          style={{ fontFamily: "fantasy", color: "rgb(12, 155, 79)" }}
        >
          Best-Wrench Account
        </h1>
        <div style={{ display: loader }}>
          <Loder />
        </div>
      </div>
      <Form name="basic3" labelCol={{ span: 4 }} wrapperCol={{ span: 25 }}>
        <label style={{ fontSize: "1.4rem", padding: "0rem 1rem" }}>
          Password*
        </label>
        <Form.Item
          rules={[{ required: true, message: "Please input your userEmail!" }]}
        >
          <Input
            required
            name="email"
            value={Date.email}
            type="email"
            onChange={(e) => handleloginChange(e)}
            style={{ margin: ".3rem 1rem", height: "3rem", fontSize: "1.4rem" }}
            prefix={<MailOutlined style={{ color: "rgb(4, 169, 1)" }} />}
            placeholder="Enter Email...."
          />
        </Form.Item>
        <label style={{ fontSize: "1.4rem", padding: "0rem 1rem" }}>
          Password*
        </label>
        <Form.Item
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password
            required
            name="password"
            value={Date.password}
            onChange={(e) => handleloginChange(e)}
            style={{ margin: ".3rem 1rem", height: "3rem", fontSize: "1.4rem" }}
            prefix={<LockOutlined style={{ color: "rgb(4, 169, 1)" }} />}
            placeholder="Enter Password...."
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
            onClick={loginData}
          >
            Login
          </Button>
          <br />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "1rem",
          }}
        >
          <p>Forgot Password?</p>
          <p
            style={{
              cursor: "pointer",
              textDecoration: "underLine",
              color: "blue",
            }}
            onClick={() => {
              setSignUp("none");
              setLogin("none");
              setForgot("");
            }}
          >
            Reset Password
          </p>
        </div>
      </Form>
    </div>
  );
}

export default SignInModal;
