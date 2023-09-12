import React from "react";
import "./style/Footer.css"; // You can create and import your own CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          &copy; {new Date().getFullYear()} Best Wrench. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
