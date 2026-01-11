import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Personal Portfolio Website",
      desc:
        "Designed and built a fully responsive personal portfolio with reusable UI components, optimized assets, SEO improvements, and continuous deployment on GitHub Pages.",
      tech: "HTML5 • CSS3 • JavaScript • Responsive Design • GitHub Pages",
    },
    {
      title: "ICAPMOT Research Website Enhancements – Seed NanoTech",
      desc:
        "Developed interactive JavaScript visualization modules, optimized MySQL queries, and improved page rendering speed by 30% through DOM and asset optimization.",
      tech: "JavaScript • MySQL • HTML • CSS • Git • Performance Optimization",
    },
    {
      title: "Batch Report Automation Framework – Cotiviti",
      desc:
        "Built a scalable Java-based automation framework using Selenium, TestNG, REST Assured, and SQL to validate healthcare batch reports, reducing manual QA effort by 60+ hours per cycle.",
      tech: "Java • Selenium • TestNG • REST Assured • SQL • Jenkins • Maven • POM",
    },
    {
      title: "Banking Management System – Capstone Project",
      desc:
        "Developed a microservices-based banking platform with authentication, transactions, credit cards, loans, and locker services, secured with JWT and integrated with a React frontend.",
      tech: "Spring Boot • React • Microservices • JWT • MySQL • REST APIs • Docker",
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
