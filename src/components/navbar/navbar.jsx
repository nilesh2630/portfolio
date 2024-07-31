import React from "react";
import "./nav.css";

const Navbar = () => {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Portfolio</div>
      </div>
      <div className="n-right">
        <a href="mailto:ng.niesh123@gmail.com">
          <button className="button n-button">Contact Us</button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
