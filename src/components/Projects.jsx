import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Personal Portfolio Website",
      desc:
        "Designed and developed a responsive portfolio with performance optimization, SEO enhancements, and GitHub Pages deployment.",
      tech: "HTML5 • CSS3 • JavaScript • GitHub Pages",
    },
    {
      title: "ICAPMOT Research Platform – Seed NanoTech",
      desc:
        "Improved page performance, added interactive modules, optimized queries, and collaborated with researchers for UI upgrades.",
      tech: "JavaScript • MySQL • Git • DOM Optimization",
    },
    {
      title: "Batch Report Automation – Cotiviti",
      desc:
        "Built Java Selenium automation, REST API validation, POM framework, Jenkins CI pipelines, and saved 60+ manual hours per cycle.",
      tech: "Java • Selenium • TestNG • REST Assured • SQL • Jenkins • Maven",
    },
    {
      title: "SneakPeak – Lambton College",
      desc:
        "A minimal business management app built to manage users, tasks, and roles with basic CRUD operations.",
      tech: "MongoDB • JavaScript • HTML/CSS • GitHub",
    },
  ];

  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((proj, i) => (
          <div className="project-card" key={i}>
            <h3>{proj.title}</h3>
            <p>{proj.desc}</p>
            <span className="tech">{proj.tech}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
