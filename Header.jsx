import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
    <header>
      <nav>
        {/* <div className="logo">My Website</div> */}
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
    </>
  );
};

export default Header;
