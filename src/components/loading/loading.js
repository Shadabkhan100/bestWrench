import React from "react";
import "./loading.css";
function Loading() {
  return (
    <div>
      <div className="text-center" style={{ margin: "auto" }}>
        <img
          style={{ height: "6rem" }}
          src="/logo.png"
          alt="Loading.."
          srcSet=""
        />
        <img
          className="loader"
          alt="loading"
          src="https://i.pinimg.com/originals/da/83/25/da832510129901b5af57fce40d583724.gif"
        ></img>
        <h1
          className="text-center"
          style={{ color: "red", fontWeight: "bold" }}
        >
          Loading......
        </h1>
      </div>
    </div>
  );
}

export default Loading;
