import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
function NotFound() {
  return (
    <div className="ErrorPage">
      <h1 className="text-center">Sorry Page Not Found on Best-Wrench</h1>
      <Button type="success">
        <Link to={"/"}>Back To Home</Link>
      </Button>
    </div>
  );
}

export default NotFound;
