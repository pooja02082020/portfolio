import React from "react";

const Experience = () => (
  <section id="experience" className="section">
    <h2>Experiences</h2>

    <div className="timeline">

      <div className="timeline-item">
        <h3>Full Stack Developer – Comcast -(Remote)</h3>
        <p>Mar 2025 – Present</p>
        <ul>
          <li>Built and optimized 8+ React components using code-splitting, lazy loading, improving UI performance by 20%.</li>
          <li>Designed scalable UI architecture with React, TypeScript, and Styled Components, reducing duplicate code by 25%.</li>
          <li>Developed and maintained REST APIs using Node.js and Express, improving data retrieval efficiency by 25%.</li>
          <li>Implemented unit, integration, and UI tests using Jest and React Testing Library to ensure high frontend quality.</li>
        </ul>
      </div>

      <div className="timeline-item">
        <h3>SDET (Software Development Engineer in Test) – Cotiviti</h3>
        <p>Aug 2021 – Mar 2023</p>
        <ul>
          <li>Designed and enhanced UI & API automation frameworks using Java, Selenium, TestNG, and REST Assured, increasing coverage from 45% to 85%.</li>
          <li>Implemented data-driven and hybrid frameworks, boosting defect detection rate by 25%.</li>
          <li>Reduced regression execution time by 25% by stabilizing tests and improving synchronization.</li>
          <li>Integrated automation into Jenkins CI/CD pipelines, saving 50+ manual QA hours per release.</li>
          <li>Validated REST APIs, backend logic, and healthcare calculations with high accuracy.</li>
          <li>Mentored junior SDETs on framework design, debugging, and automation best practices.</li>
        </ul>
      </div>

      <div className="timeline-item">
        <h3>Associate SDET – Cotiviti</h3>
        <p>Dec 2018 – Aug 2021</p>
        <ul>
          <li>Developed automation scripts using Java, Selenium, TestNG, and Page Object Model.</li>
          <li>Executed end-to-end testing and logged detailed defects to ensure high product quality.</li>
          <li>Performed SQL queries for backend data validation and integrity checks.</li>
          <li>Maintained locator strategies and resolved flaky tests to stabilize early automation frameworks.</li>
        </ul>
      </div>

      <div className="timeline-item">
        <h3>Software Engineering Co-op – Seed NanoTech International Inc.</h3>
        <p>Aug 2024 – Dec 2024</p>
        <ul>
          <li>Enhanced ICAPMOT research website with interactive JavaScript modules and UI improvements.</li>
          <li>Optimized MySQL queries and DOM rendering, improving data retrieval and page performance by up to 30%</li>
          <li>Collaborated with researchers to deploy workflow and visualization enhancements.</li>
        </ul>
      </div>

    </div>
  </section>
);

export default Experience;
