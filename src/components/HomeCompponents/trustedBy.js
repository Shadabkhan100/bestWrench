import React, { useEffect } from "react";
import "../style/trusted.css";
import "aos/dist/aos.css";
import AOS from "aos";

function TrustedBy() {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  return (
    <div>
      <div
        id="trust_head"
        className="flex-container d-flex align-items-center justify-content-center"
      >
        <div className="text-center">
          <h1 className="mx-4" style={{ whiteSpace: "nowrap", margin: 0 }}>
            Trusted By
          </h1>
          <img
            alt="loading"
            style={{
              justifyContent: "right",
            }}
            src="/logo.png"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default TrustedBy;
