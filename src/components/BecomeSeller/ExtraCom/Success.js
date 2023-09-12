import MainNavbar from "../../OurServices/navbar";
import React, { useState } from "react";

import { Form, Input, Button, message, Select, Card } from "antd";
const { Option } = Select;
function Success() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [Services, setServices] = useState("Choose Service");
  const [Duration, setDuration] = useState("Select Duration");
  const [text, settext] = useState("");

  const handleSubmit = async (values) => {
    setIsSubmitting(true);

    try {
      setSubmitSuccess(true);
      message.success("Project has been sent");
      settext("Project details sent Successfully......");
      setTimeout(() => {
        settext("");
      }, 3000);
    } catch (error) {
      message.error("Error sending Details");
    }

    setIsSubmitting(false);
  };

  return (
    <div>
      <MainNavbar />

      <Form onFinish={handleSubmit} style={{ padding: "0rem 4rem" }}>
        <label
          style={{ fontSize: "1.1rem", color: "green", fontWeight: "bold" }}
        >
          Name
        </label>
        <Form.Item
          name="name"
          rules={[{ required: true, message: "Please enter your name" }]}
        >
          <Input
            style={{ width: "100%" }}
            placeholder="Enter Email Address"
            value=""
          />
        </Form.Item>
        <label
          style={{ fontSize: "1.1rem", color: "green", fontWeight: "bold" }}
        >
          Email
        </label>
        <Form.Item
          name="email"
          rules={[
            { required: true, message: "Please enter your email" },
            { type: "email", message: "Please enter a valid email" },
          ]}
        >
          <Input placeholder="Enter your gmail" style={{ width: "100%" }} />
        </Form.Item>
        <label
          style={{ fontSize: "1.1rem", color: "green", fontWeight: "bold" }}
        >
          Message
        </label>
        <Form.Item
          name="message"
          rules={[{ required: true, message: "Please enter a message" }]}
        >
          <Input.TextArea
            placeholder="Enter your message"
            style={{ width: "100%" }}
          />
        </Form.Item>
        <Form.Item>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button
              style={{
                backgroundColor: "green",
                color: "white",
                width: "77%",
                marginTop: "3rem",
              }}
              htmlType="submit"
              loading={isSubmitting}
              disabled={isSubmitting}
            >
              Send Message
            </Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Success;
