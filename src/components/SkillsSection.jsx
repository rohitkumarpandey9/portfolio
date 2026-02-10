import React from "react";
import "../styles/SkillsSection.css";

// Tumhare logos ko import karo
import HtmlLogo from "../Photo/html.webp";
import CssLogo from "../Photo/css.png";
import JsLogo from "../Photo/js.png";
import JavaLogo from "../Photo/java.webp";
import ReactLogo from "../Photo/react.webp";
import SqlLogo from "../Photo/sql.webp";

function SkillsSection() {
  const skills = [
    { name: "HTML", logo: HtmlLogo },
    { name: "CSS", logo: CssLogo },
    { name: "JavaScript", logo: JsLogo },
    { name: "Java", logo: JavaLogo },
    { name: "React", logo: ReactLogo },
    { name: "SQL", logo: SqlLogo },
  ];

  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">
        <h1>Skill-Sections</h1>
      </h2>
      <div className="skills-cards">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <img src={skill.logo} alt={skill.name} />
            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;
