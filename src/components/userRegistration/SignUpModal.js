import React, { useState, useRef } from "react";
import {
  UserOutlined,
  LockOutlined,
  MailOutlined,
  FacebookFilled,
  GoogleCircleFilled,
  TwitterCircleFilled,
} from "@ant-design/icons";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import "../style/signUpHeader.css";
import { Button, Checkbox, Form, Input, message, Modal, Avatar } from "antd";
import Loder from "../loader";
import SignInModal from "./signInModal";
import ResetPassword from "./resetPassword";
function SignUpModal({ showModal, setshowModal }) {
  const fileInput = useRef();
  const [isBuyerChecked, setIsBuyerChecked] = useState(false);
  const [isSellerChecked, setIsSellerChecked] = useState(false);

  //   let navigate = useNavigate();
  const [SignUp, setSignUp] = useState(true);
  const [Login, setLogin] = useState("none");
  const [Forgot, setForgot] = useState("none");
  const [loader, setloader] = useState("none");
  /*----------------------- SignUp Code-------------------------- */

  const handleBuyerCheckboxChange = (event) => {
    setIsBuyerChecked(event.target.checked);
    setData((prevData) => ({
      ...prevData,
      isBuyer: event.target.checked,
    }));
  };

  const handleSellerCheckboxChange = (event) => {
    setIsSellerChecked(event.target.checked);
    setData((prevData) => ({
      ...prevData,
      isSeller: event.target.checked,
    }));
  };

  const [Data, setData] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
    number: null,
    address: "",
    image: "",
    isBuyer: false, // Default value for Buyer checkbox
    isSeller: false, // Default value for Seller checkbox
  });

  let value, name;
  const handleChange = (event) => {
    name = event.target.name;
    value = event.target.value;
    setData({ ...Data, [name]: value });
  };
  const signUpData = async () => {
    console.log("sign up part render.....");
    event.preventDefault();
    const { name, email, password } = Date;
    if (Date.password !== Date.cpassword) {
      message.error("Confirm Password Again");
    } else {
      if (name && email && password) {
        setloader("");
        createUserWithEmailAndPassword(auth, email, password)
          .then((response) => {
            let user = response.user;
            updateProfile(user, { displayName: name });
            setloader("none");
            reSetForm();
            message.success("Account Created Successfully");
            navigate("/home");
            setSignUp("none");
          })
          .catch((error) => {
            setloader("none");
            if (password.length < 6) {
              message.error("password must be at least 6 characters");
            } else {
              message.error("Email already in use:");
            }
          });
      }
    }
  };

  /*----------------------- User Sign Code-------------------------- */
  // let initialState=JSON.parse(window.localStorage.getItem('user') || "{email:'',password:''}")
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

        setSignUp("none");
      } catch (error) {
        setloader("none");
        message.error("Incorrect Username or Password Try Again");
      }
    }
  };

  /*----------------------- Password reset code-------------------------- */
  const [resetEmail, setResetEmail] = useState("");
  const resetPassword = () => {
    console.log(resetEmail);
    console.log("reset part render.....");
    setloader("");
    try {
      message.success("Email sent to the: " + resetEmail);
      setForgot("none");
      setLogin("none");
      setSignUp("");
    } catch (error) {
      setloader("none");
      message.error("authentication failed try again");
    }
  };

  const handleGoogle = () => {};

  return (
    <div>
      <Modal
        width={730}
        open={showModal}
        onCancel={() => {
          setshowModal(false);
        }}
        okText={"Continue Without Account"}
        onOk={() => setshowModal(false)}
      >
        <div style={{ display: SignUp }}>
          <div className="SignUpHeader">
            <img src="/logo.png" alt="loading"></img>
          </div>
          <h2
            className="text-center my-3"
            style={{ color: "rgb(12, 155, 79)" }}
          >
            Register On
          </h2>
          <h1
            className="text-center"
            style={{ fontFamily: "fantasy", color: "rgb(12, 155, 79)" }}
          >
            Best-Wrench
          </h1>

          <div style={{ display: loader }}>
            <Loder />
          </div>

          <Form
            className="my-4"
            name="basic2"
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 25 }}
            onFinish={signUpData} // Use onFinish to handle form submission
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div>
                <Form.Item
                  style={{
                    padding: "3rem",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center", // Center the items horizontally
                  }}
                >
                  <label
                    htmlFor="fileInput"
                    style={{
                      cursor: "pointer",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <Avatar
                        size={150}
                        icon={<UserOutlined style={{ fontSize: "6rem" }} />}
                        src={Data.profile_image}
                      />
                    </div>

                    <h4 className="my-2" style={{}}>
                      Upload Profile Image
                    </h4>
                  </label>
                  <input
                    type="file"
                    id="fileInput" // Use the 'id' attribute to link the label and input
                    name="image"
                    style={{ display: "none" }}
                    onChange={(e) => handleChange(e)}
                    ref={fileInput}
                  />
                </Form.Item>
              </div>
            </div>
            <label
              className="mx-3"
              style={{ fontSize: "1.3rem" }}
              htmlFor="Username"
            >
              Username
            </label>
            <Form.Item
              name="name"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input
                required
                type="text"
                name="name"
                value={Data.name}
                onChange={(e) => handleChange(e)}
                style={{
                  margin: ".3rem 1rem",
                  height: "3rem",
                  fontSize: "1.4rem",
                }}
                prefix={<UserOutlined style={{ color: "rgb(4, 169, 1)" }} />}
                placeholder="Enter Username...."
              />
            </Form.Item>
            <label className="mx-3" style={{ fontSize: "1.3rem" }}>
              Email
            </label>
            <Form.Item
              name="email"
              rules={[
                { required: true, message: "Please input your email!" },
                {
                  type: "email",
                  message: "Please enter a valid email address!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (value.endsWith("@gmail.com")) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error("Email must be a valid Gmail address!")
                    );
                  },
                }),
              ]}
            >
              <Input
                required
                name="email"
                value={Data.email}
                type="email"
                onChange={(e) => handleChange(e)}
                style={{
                  margin: ".3rem 1rem",
                  height: "3rem",
                  fontSize: "1.4rem",
                }}
                prefix={<MailOutlined style={{ color: "rgb(4, 169, 1)" }} />}
                placeholder="Enter Email...."
              />
            </Form.Item>
            <label className="mx-3" style={{ fontSize: "1.3rem" }}>
              Permanent Address
            </label>
            <Form.Item
              name="address"
              rules={[
                { required: true, message: "Please input your address!" },
              ]}
            >
              <Input
                required
                name="address"
                value={Data.address}
                type="text"
                onChange={(e) => handleChange(e)}
                style={{
                  margin: ".3rem 1rem",
                  height: "3rem",
                  fontSize: "1.4rem",
                }}
                prefix={<MailOutlined style={{ color: "rgb(4, 169, 1)" }} />}
                placeholder="Enter Valid Address...."
              />
            </Form.Item>
            <label className="mx-3" style={{ fontSize: "1.3rem" }}>
              Active Phone-No
            </label>
            <Form.Item
              name="number"
              rules={[
                { required: true, message: "Please input your phone number!" },
                {
                  pattern: /^\d{10}$/,
                  message: "Please enter a valid 10-digit phone number!",
                },
              ]}
            >
              <Input
                required
                name="number"
                value={Data.number}
                type="number"
                onChange={(e) => handleChange(e)}
                style={{
                  margin: ".3rem 1rem",
                  height: "3rem",
                  fontSize: "1.4rem",
                }}
                prefix={<MailOutlined style={{ color: "rgb(4, 169, 1)" }} />}
                placeholder="Enter Phone Number...."
              />
            </Form.Item>
            <label className="mx-3" style={{ fontSize: "1.3rem" }}>
              Password
            </label>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
                {
                  min: 6,
                  message: "Password must be at least 6 characters long!",
                },
              ]}
            >
              <Input.Password
                required
                name="password"
                placeholder="Enter your Password"
                value={Data.password}
                onChange={(e) => handleChange(e)}
                style={{
                  margin: ".3rem 1rem",
                  height: "3rem",
                  fontSize: "1.4rem",
                }}
                prefix={<LockOutlined style={{ color: "rgb(4, 169, 1)" }} />}
              />
            </Form.Item>
            <label className="mx-3" style={{ fontSize: "1.3rem" }}>
              Confirm Password
            </label>
            <Form.Item
              name="cpassword"
              dependencies={["password"]}
              rules={[
                { required: true, message: "Please confirm your password!" },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error("The two passwords do not match!")
                    );
                  },
                }),
              ]}
            >
              <Input.Password
                required
                name="cpassword"
                value={Data.cpassword}
                onChange={(e) => handleChange(e)}
                style={{
                  margin: ".3rem 1rem",
                  height: "3rem",
                  fontSize: "1.4rem",
                }}
                prefix={<LockOutlined style={{ color: "rgb(4, 169, 1)" }} />}
                placeholder="Confirm Your Password...."
              />
            </Form.Item>
            <label className="mx-3" style={{ fontSize: "1.3rem" }}>
              Account Status
            </label>
            <Form.Item
              name="accountStatus"
              rules={[
                {
                  required: true,
                  message: "Please select at least one account status!",
                },
              ]}
            >
              <Checkbox.Group
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <Checkbox
                  value="isBuyer"
                  checked={isBuyerChecked}
                  onChange={handleBuyerCheckboxChange}
                >
                  Buyer
                </Checkbox>
                <Checkbox
                  value="isSeller"
                  checked={isSellerChecked}
                  onChange={handleSellerCheckboxChange}
                >
                  Seller
                </Checkbox>
              </Checkbox.Group>
            </Form.Item>
            <Form.Item>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{
                    backgroundColor: "rgb(4, 169, 1)",
                    color: "white",
                    width: "20rem",
                  }}
                >
                  Create Account
                </Button>
                <br />
              </div>
            </Form.Item>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                padding: "1rem",
              }}
            >
              <p>Already have an account?</p>
              <p
                style={{
                  cursor: "pointer",
                  textDecoration: "underLine",
                  color: "blue",
                }}
                onClick={() => {
                  setSignUp("none");
                  setLogin("");
                  setForgot("none");
                }}
              >
                Login
              </p>
              <br />
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <FacebookFilled
                style={{
                  color: "blue",
                  fontSize: "1.5rem",
                  margin: "0rem 1rem",
                  cursor: "pointer",
                }}
              />{" "}
              <TwitterCircleFilled
                style={{
                  color: "blue",
                  fontSize: "1.5rem",
                  margin: "0rem 1rem",
                  cursor: "pointer",
                }}
              />
              <GoogleCircleFilled
                onClick={handleGoogle}
                style={{
                  margin: "0rem 1rem",
                  color: "rgb(4, 169, 1)",
                  fontSize: "1.5rem",
                  cursor: "pointer",
                }}
              />
            </div>
          </Form>
        </div>
        {/* -----------------------My Login Form -----------------------*/}
        <div style={{ display: Login }}>
          <SignInModal
            loginData={loginData}
            handleloginChange={handleloginChange}
            loader={loader}
            setSignUp={setSignUp}
            setLogin={setLogin}
            setForgot={setForgot}
          />
        </div>

        {/* -----------------------Forgot Password Form -----------------------*/}
        <div style={{ display: Forgot }}>
          <ResetPassword
            loader={loader}
            setSignUp={setSignUp}
            setLogin={setLogin}
            setForgot={setForgot}
            resetPassword={resetPassword}
            setResetEmail={setResetEmail}
            resetEmail={resetEmail}
          />
        </div>
      </Modal>
    </div>
  );
}

export default SignUpModal;
