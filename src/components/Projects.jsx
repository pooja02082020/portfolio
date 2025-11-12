import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "SneakPeak – Lambton College",
      desc: "A business management app built using HTML, CSS, JS, and MongoDB.",
      tech: "MongoDB • JavaScript • GitHub",
    },
    {
      title: "ICAPMOT Platform – Seed NanoTech",
      desc: "Enhanced front and back-end functionality using HTML, CSS, JS, and Selenium.",
      tech: "Selenium • Azure DevOps • JS",
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
            <span>{proj.tech}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
