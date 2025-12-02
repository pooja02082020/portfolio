import React from "react";

const Experience = () => (
  <section id="experience" className="section">
    <h2>Experience</h2>

    <div className="timeline">

      <div className="timeline-item">
        <h3>Full Stack Developer – Comcast (Remote)</h3>
        <p>Mar 2025 – Present</p>
        <ul>
          <li>Developed and optimized React components improving UI load time by 30%.</li>
          <li>Built scalable UI architecture with TypeScript and Styled Components.</li>
          <li>Designed and maintained REST APIs using Node.js and Express.</li>
          <li>Implemented automated UI and integration tests using Jest and React Testing Library.</li>
          <li>Strengthened CI/CD workflows with GitHub Actions and linting automation.</li>
        </ul>
      </div>

      <div className="timeline-item">
        <h3>SDET (Software Development Engineer in Test) – Cotiviti</h3>
        <p>Aug 2021 – Mar 2023</p>
        <ul>
          <li>Designed advanced UI and API automation frameworks raising coverage from 45%→85%.</li>
          <li>Reduced regression cycle by 40% by improving test stability and synchronization.</li>
          <li>Integrated automation suite into Jenkins pipelines, saving 50+ hours per release.</li>
          <li>Led defect triage and collaborated directly with developers for fast resolution.</li>
        </ul>
      </div>

      <div className="timeline-item">
        <h3>Associate SDET – Cotiviti</h3>
        <p>Dec 2018 – Aug 2021</p>
        <ul>
          <li>Developed automation scripts using Java, Selenium, and POM framework.</li>
          <li>Performed SQL data verification and backend validation to ensure accuracy.</li>
          <li>Improved locator strategies and resolved flaky tests to stabilize automation.</li>
        </ul>
      </div>

      <div className="timeline-item">
        <h3>Software Engineering Co-op – Seed NanoTech International Inc.</h3>
        <p>Aug 2024 – Dec 2024</p>
        <ul>
          <li>Enhanced ICAPMOT research platform UI and backend workflow.</li>
          <li>Developed JS visualization modules and optimized DOM rendering performance.</li>
          <li>Authored Selenium scripts and strengthened regression automation.</li>
        </ul>
      </div>

    </div>
  </section>
);

export default Experience;
