import { useState } from "react";
import "./Projects.css";

const projects = [
  {
    num: "03",
    title: "ShopX — Ecommerce Website",
    desc: "A fully functional ecommerce web application built with React 18 and Vite. Fetches real product data from Fake Store API including products, categories, and ratings. Features include live search, category filtering, product detail modal, shopping cart with quantity controls, and a simulated checkout flow. State management is handled using React useReducer and useContext.",
    tags: [
      "React",
      "Vite",
      "CSS Modules",
      "Fake Store API",
      "useContext",
      "useReducer",
      "Bootstrap ",
    ],
    img: "/Project/shopx/image.png",
    color: "#e8ff00",
    github: "https://github.com/rohitkumarpandey9",
    live: "https://shopx-react-ecommerce.vercel.app",
  },
  {
    num: "01",
    title: "E-Commerce Shopping App",
    desc: "A React-based e-commerce application with Admin and User roles. Admin can add, update, and manage products, while users can browse and view product details. Includes authentication and verification system for both roles. Data is managed using JSON Server as a mock database and integrated with Axios for API communication.\n\n⚠️ Note: This project uses JSON Server as a local mock database. A live demo is not available as JSON Server requires a local setup to run. The complete source code is available on GitHub.",
    tags: [
      "React",
      "Axios",
      "JSON Server",
      "JavaScript",
      "CSS",
      "Bootstrap ",
      "Toast Library",
    ],
    img: "/Shoping/image.png",
    color: "#ffd60a",
    github: "https://github.com/rohitkumarpandey9",
    live: "https://shopx-react-ecommerce.vercel.app",
  },
  {
    num: "02",
    title: "Student Management System",
    desc: "Web application built using Java Spring Boot with Thymeleaf for the frontend view layer. The system manages student records and supports CRUD operations such as adding, updating, viewing, and deleting students. Spring Data JPA is used for database interaction and Oracle Database is used for data storage.\n\n ⚠️ Note: This project requires a local Oracle Database setup to run. Due to database infrastructure limitations, a live demo is not available. The complete source code is available on GitHub.",
    tags: ["Java", "Spring Boot", "Thymeleaf", "Spring Data JPA", "Oracle DB"],
    img: "/Project/StudentMngSystem/studentmng.png",
    color: "#00ff87",
    github: "https://github.com/rohitkumarpandey9",
    live: "https://github.com/rohitkumarpandey9/student-management-system",
  },
  {
    num: "03",
    title: "Portfolio Website",
    desc: "Modern responsive personal portfolio with dark theme, particle background, typing animations, custom cursor, and smooth scroll. Built with React + Vite.",
    tags: ["React", "Vite", "CSS", "JavaScript"],
    img: "/Project/portfolio/image.png",
    color: "#60efff",
    github: "https://github.com/rohitkumarpandey9",
    live: "#",
  },

  {
    num: "03",
    title: "Coming Soon 🚀",
    desc: "Currently working on new projects — Spring Boot microservices, React dashboards, and DSA problems. Exciting things are in progress!",
    tags: ["In Progress", "Java", "React", "Spring Boot"],
    img: null,
    color: "#ffd60a",
    github: "https://github.com/rohitkumarpandey9",
    live: "#",
  },
];

export default function Projects() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="projects" className="section">
      <div className="proj-inner">
        <div className="sec-tag fade-up">What I've Built</div>
        <h2 className="sec-title fade-up">Projects</h2>
        <div className="sec-line fade-up" />
        <div className="proj-grid">
          {projects.map((p, i) => (
            <div
              className="proj-card fade-up hover-target"
              key={i}
              style={{ transitionDelay: `${i * 0.12}s`, "--pc": p.color }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="proj-top-line" />
              {/* Image preview */}
              <div className="proj-img-wrap">
                {p.img ? (
                  <img
                    src={p.img}
                    alt={p.title}
                    className="proj-img"
                    onError={(e) => (e.target.style.display = "none")}
                  />
                ) : (
                  <div className="proj-img-placeholder">🚀</div>
                )}
              </div>
              <div className="proj-num">{p.num}</div>
              <div className="proj-title">{p.title}</div>
              <p className="proj-desc" style={{ whiteSpace: "pre-wrap" }}>
                {p.desc}
              </p>
              <div className="proj-tags">
                {p.tags.map((t, j) => (
                  <span className="proj-tag" key={j}>
                    {t}
                  </span>
                ))}
              </div>
              <div className="proj-links">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="proj-link hover-target"
                >
                  GitHub →
                </a>
                {p.live !== "#" && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="proj-link proj-link-live hover-target"
                  >
                    Live ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
