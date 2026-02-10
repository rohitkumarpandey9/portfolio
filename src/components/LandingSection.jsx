import React from "react";
import RohitImage from "../Photo/rohit.jpeg";
import "../styles/LandingSection.css";

function LandingSection() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <h1>
          Hi, I’m <span className="highlight">Rohit Kumar Pandey ,</span>
        </h1>
        <p>
          I am a Full Stack Developer | Html | Css | Javascript | React | java |
          Spring Boot | Sql |
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">
            View My Projects
          </a>
          <a
            href="Rohit_Pandey_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-light"
          >
            Download Resume
          </a>
        </div>
      </div>
      <div className="hero-image">
        <img src={RohitImage} alt="Image not loading " />
      </div>
    </section>
  );
}

export default LandingSection;
