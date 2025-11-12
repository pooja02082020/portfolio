import React from "react";
import profile from "../assets/PoojaProfile.jpg";
import resume from "../assets/Pooja_Lohani_Resume.pdf"; // add your resume file in assets folder

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <img src={profile} alt="Pooja Lohani" className="profile-pic" />
        <h1>Hi, I’m <span>Pooja Lohani</span></h1>
        <p>
          A passionate <strong>Full Stack Developer</strong> and{" "}
          <strong>QA Engineer</strong> crafting clean, responsive, and
          user-focused web applications.
        </p>

        <div className="hero-buttons">
          <a href={resume} download className="btn resume-btn">📄 Download Resume</a>
          <a href="#projects" className="btn outline">View Projects</a>
        </div>

        <div className="social-icons">
          <a href="https://www.linkedin.com/in/pooja-lohani-22826b184/" target="_blank">🔗 LinkedIn</a>
          <a href="https://github.com/pooja02082020/" target="_blank">💻 GitHub</a>
          <a href="mailto:lohanipooja77@gmail.com">📧 Email</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
