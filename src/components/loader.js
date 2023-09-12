import React from "react";

function Loader() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <img
        style={{ alignItems: "center" }}
        className="text-center"
        src="https://icons8.com/preloaders/preloaders/1495/Spinner-3.gif"
        alt=""
        srcSet=""
      />
    </div>
  );
}

export default Loader;
