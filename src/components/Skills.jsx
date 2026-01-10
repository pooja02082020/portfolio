import React from "react";

const Skills = () => (
  <section id="skills" className="section">
    <h2>Skills</h2>

    <div className="skills-grid">

      <div>
        <h3>Programming Languages</h3>
        <p>Java, JavaScript, TypeScript, Python, SQL</p>
      </div>

      <div>
        <h3>Frontend Development</h3>
        <p>React.js, Vite, HTML5, CSS3, Styled Components, Responsive Design, Bootstrap</p>
      </div>

      <div>
        <h3>Backend & Databases</h3>
        <p>Node.js, Express.js, MongoDB, MySQL, SQL Server, REST API Development, Microservices</p>
      </div>

      <div>
        <h3>Automation & Testing</h3>
        <p>
          Selenium WebDriver, TestNG, JUnit, REST Assured, Cypress, Playwright, 
          Postman, BDD with Cucumber, Data-driven & Hybrid Frameworks, API Testing, 
          React Testing Library
        </p>
      </div>

      <div>
        <h3>DevOps & Cloud</h3>
        <p>Jenkins, Git, GitHub CI/CD, Docker, AWS (EC2, S3, Lambda, CloudWatch), GitHub Actions, Maven</p>
      </div>

      <div>
        <h3>Tools & Concepts</h3>
        <p>OOP, Collections, Multithreading, JDBC, Agile/Scrum, Jira, Confluence, VS Code, IntelliJ</p>
      </div>

      <div>
        <h3>Certifications</h3>
        <p>
          AWS Certified Cloud Practitioner (2025–2028)<br />
          ISTQB Foundation Level <br />
          SAFe for Teams (2021–2022)
        </p>
      </div>

    </div>
  </section>
);

export default Skills;
