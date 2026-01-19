import React from "react";
import profile from "../assets/PoojaProfile.jpg";
import resume from "../assets/Pooja_Lohani_Resume.pdf";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-left">
        <div className="profile-ring">
          <img src={profile} alt="Pooja Lohani" className="hero-img" />
        </div>
      </div>

      <div className="hero-right">
        <h1 className="hero-title">Pooja Lohani</h1>

        <p className="hero-role">
          Full Stack Developer • SDET • Automation Engineer
        </p>

        <p className="hero-desc">
          Results-driven Software Developer & SDET with 5+ years of experience
          building high-performance React applications, scalable APIs, and
          robust automation frameworks. I specialize in delivering reliable,
          production-ready systems through clean code, CI/CD pipelines, and cloud-first
          engineering.
        </p>

        <div className="hero-buttons">
          <a href={resume} download className="btn">
            📄 Download Resume
          </a>
          <a href="#projects" className="btn outline">
            🚀 View My Work
          </a>
        </div>

        <div className="hero-socials">
          <a
            href="https://linkedin.com/in/lohanipooja"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/pooja02082020"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a href="mailto:poojalohani9625@gmail.com">
            Email
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
