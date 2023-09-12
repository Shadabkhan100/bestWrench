import React, { useState } from "react";
import { LockOutlined, MailOutlined } from "@ant-design/icons";

import "../style/signUpHeader.css";
import { Button, Form, Input, message } from "antd";
import Title from "antd/es/typography/Title";
import Loder from "../loader";

function OnlySignIn() {
  const [loader, setloader] = useState("none");
  const [loginDetails, setloginDetails] = useState({
    email: "",
    password: "",
  });
  let myName, myValue;
  const handleloginChange = (login) => {
    myName = login.target.name;
    myValue = login.target.value;
    setloginDetails({ ...loginDetails, [myName]: myValue });
  };
  const loginData = async () => {
    console.log(loginDetails);
    console.log("sign in part render.....");
    setloader("");
    const { email, password } = loginDetails;
    if (email && password) {
      try {
        message.success("Logged In Successfully");
      } catch (error) {
        setloader("none");
        message.error("Incorrect Username or Password Try Again");
      }
      //   signInWithEmailAndPassword(auth, email, password)
      //     .then((response) => {
      //       let user = response.user;
      //       console.log(user);
      //       updateProfile(user, { displayName: Date.name });
      //       setloader("none");
      //       resetLoginForm();
      //        })

      // window.localStorage.setItem('user',JSON.stringify(loginDetails));
    }
  };
  return (
    <div>
      <div className="SignUpHeader">
        <img src="/logo.png" alt="loading"></img>
      </div>
      <Title
        level={2}
        style={{
          color: "rgba(12, 158, 9, 0.509)",
          textAlign: "center",
          margin: "1rem",
        }}
      >
        Login To Your Account
      </Title>
      <div style={{ display: loader }}>
        <Loder />
      </div>
      <Form name="basic3" labelCol={{ span: 4 }} wrapperCol={{ span: 25 }}>
        <label style={{ fontSize: "1.4rem", padding: "0rem 1rem" }}>
          Email*
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
            style={{
              margin: ".3rem 1rem",
              height: "3rem",
              fontSize: "1.4rem",
              width: "100%",
            }}
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
          <p>If you haven't account back and register</p>
        </div>
      </Form>
    </div>
  );
}

export default OnlySignIn;
