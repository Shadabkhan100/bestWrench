import React, { useRef } from "react";
import "../style/populerServces.css";
import services from "../services.json";

import { ArrowRightOutlined, ArrowLeftOutlined } from "@ant-design/icons";

function PopulerServces() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollLeft -= 200;
  };

  const scrollRight = () => {
    scrollRef.current.scrollLeft += 200;
  };

  return (
    <div>
      <div className="scroll-arrows">
        <ArrowLeftOutlined
          style={{ fontSize: "3rem", color: "rgb(12, 155, 79)" }}
          onClick={scrollLeft}
        >
          &#8592;
        </ArrowLeftOutlined>
        <div
          className="flex-Con"
          ref={scrollRef}
          style={{ padding: "4rem 1rem" }}
        >
          {services.map((element, index) => (
            <div className="Card" key={index}>
              <div className="Product">
                <img
                  style={{ height: "150px", width: "100%" }}
                  src="https://img.freepik.com/free-psd/silver-letters-glass-building-facade_145275-162.jpg?size=626&ext=jpg&ga=GA1.1.79629375.1687438200&semt=ais"
                  alt="loading"
                />
                <h3>{element.title}</h3>
                <p style={{ fontSize: "2rem" }}>{element.description}</p>
              </div>
            </div>
          ))}
        </div>
        <ArrowRightOutlined
          style={{ fontSize: "3rem", color: "rgb(12, 155, 79)" }}
          onClick={scrollRight}
        >
          &#8594;
        </ArrowRightOutlined>
      </div>
    </div>
  );
}

export default PopulerServces;
