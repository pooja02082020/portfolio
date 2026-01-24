import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <h2 className="logo">Pooja Lohani</h2>

        <ul className="nav-links">
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Experiences</a></li>
          <li><a href="#contact" className="contact-btn">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
