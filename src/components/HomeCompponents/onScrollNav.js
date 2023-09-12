import React, { useState, useEffect, useRef } from "react";
import "../style/NavbarOnScroll.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const menuRef = useRef(null);
  console.log(scrollPosition);
  const handleScroll = () => {
    const currentPosition = menuRef.current.scrollLeft;
    setScrollPosition(currentPosition);
    if (window.scrollY > 20) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const arr = [
    { name: "Web Development" },
    { name: "Android Development" },
    { name: "WordPress" },
    { name: "Graphic" },
    { name: "Video Editing" },
    { name: "Photo Editing" },
    { name: "Artist" },
    { name: "Video Animation" },
    { name: "Web Development" },
    { name: "Android Development" },
    { name: "WordPress" },
    { name: "Graphic" },
    { name: "Video Editing" },
    { name: "Photo Editing" },
    { name: "Artist" },
    { name: "Video Animation" },
  ];
  return (
    <div
      className={`Scrollnavbar ${scrolling ? "scrolled fixed-top" : ""}`}
      style={{ marginRight: "2rem" }}
    >
      <nav className={`navbar ${scrolling ? "scrolled" : ""}`}>
        <div className="navbar-container">
          <div
            className="nav-menu"
            ref={menuRef}
            style={{
              backgroundColor: "white",

              padding: "1rem 2rem",
            }}
          >
            <ul className="nav-menu">
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "2rem",
                  alignItems: "center",
                }}
              >
                {arr.map((e, index) => (
                  <li key={index}>
                    <Link to={`/${e.name}`}>
                      <p style={{ whiteSpace: "nowrap", margin: 0 }}>
                        {e.name}
                      </p>
                    </Link>
                  </li>
                ))}
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
