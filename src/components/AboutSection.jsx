import React from "react";
import "../styles/AboutSection.css";
import RohitImage from "../Photo/rohit.jpeg";

function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-image">
          <img src={RohitImage} alt="Rohit Kumar Pandey" />
        </div>
        <div className="about-content">
          <h2 className="section-title">About Me</h2>
          <p>
            Hello! I am <span className="highlight">Rohit Kumar Pandey</span>, a
            passionate <span className="highlight">Full Stack Developer</span>{" "}
            who loves creating modern, interactive, and responsive web
            applications. My skillset includes{" "}
            <span className="highlight">
              HTML, CSS, JavaScript, React, Java, Spring Boot, SQL
            </span>{" "}
            and much more.
          </p>
          <p>
            I enjoy solving challenging problems, optimizing performance, and
            building visually appealing interfaces. I constantly explore new
            technologies to improve my skills and deliver{" "}
            <span className="highlight">premium-quality solutions</span> for my
            projects.
          </p>
          <a
            href="Rohit_Pandey_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn about-btn"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
