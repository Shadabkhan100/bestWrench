import { Card } from "antd";
import React from "react";
import { NavLink } from "react-router-dom";

function ContactJob({
  Mytitle,
  description,
  location,
  expert,
  skills,
  duration,
  selectedJob,
}) {
  return (
    <div>
      <h1
        className="text-center"
        style={{ fontFamily: "serif", fontWeight: "bold" }}
      >
        Apply For Job
      </h1>
      <h3 className="text-center  my-4" style={{ fontFamily: "fantasy" }}>
        Our Requirements
      </h3>
      <Card style={{ border: "green solid .4rem", padding: "4rem" }}>
        <h1
          className="text-center  my-4 p-4"
          style={{ fontFamily: "monospace" }}
        >
          {Mytitle}
        </h1>
        <p style={{ fontSize: "1.5rem" }}>
          <h3 style={{ fontFamily: "cursive", color: "green" }}>
            Description:<br></br>
          </h3>
          {description}
        </p>{" "}
        <h3 style={{ fontFamily: "cursive", color: "green" }}>Location:</h3>
        <h4>{location}</h4>{" "}
        <h4 style={{ fontFamily: "cursive", color: "green" }}>
          Skill Required
        </h4>
        <h5> {skills}</h5>
        <h3>
          <h3 style={{ fontFamily: "cursive", color: "green" }}>Expertise:</h3>
          {expert}
        </h3>{" "}
        <h3 style={{ fontFamily: "cursive", color: "green" }}>Duration:</h3>
        <h4>{duration}</h4>
        <button className="btn btn-success w-50" style={{ float: "right" }}>
          <NavLink
            to={`/jobApplay/${Mytitle}`}
            style={{ color: "white", textDecoration: "none" }}
          >
            Apply for this job
          </NavLink>
        </button>
      </Card>
    </div>
  );
}

export default ContactJob;
