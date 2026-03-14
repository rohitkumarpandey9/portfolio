import { TypeAnimation } from "react-type-animation";
import { Link } from "react-scroll";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="home" className="hero">
      {/* Background orbs */}
      <div className="orb orb1" />
      <div className="orb orb2" />
      <div className="orb orb3" />
      <div className="hero-grid" />

      <div className="hero-inner">
        {/* LEFT: Text */}
        <div className="hero-text">
          <div className="status-badge">
            <span className="badge-dot" />
            Open to Work — Java Developer &amp; Full Stack
          </div>

          <p className="hero-eyebrow">Hello, I'm</p>

          <h1 className="hero-name">
            Rohit Kumar
            <br />
            <span className="name-gradient">Pandey</span>
          </h1>

          <div className="hero-typing">
            <TypeAnimation
              sequence={[
                "Java Full Stack Developer",
                2000,
                "Spring Boot Expert",
                2000,
                "React Developer",
                2000,
                "Problem Solver",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="typing-text"
            />
            <span className="typing-cursor" />
          </div>

          <p className="hero-bio">
            Computer Science Engineering graduate (2025). Passionate about
            building scalable web applications with Java, Spring Boot, and
            modern frontend technologies.
          </p>

          <div className="hero-actions">
            <Link
              to="projects"
              spy
              smooth
              duration={600}
              offset={-80}
              className="btn-primary hover-target"
            >
              View My Work →
            </Link>
            <a
              href="public\resume\Rohitkumar.pdf"
              download
              className="btn-outline hover-target"
            >
              ⬇ Download Resume
            </a>
          </div>

          {/* Social quick links */}
          <div className="hero-socials">
            <a
              href="https://github.com/rohitkumarpandey9"
              target="_blank"
              rel="noreferrer"
              className="social-dot hover-target"
              title="GitHub"
            >
              GH
            </a>
            <a
              href="https://linkedin.com/in/rohitkumarpandey3/"
              target="_blank"
              rel="noreferrer"
              className="social-dot hover-target"
              title="LinkedIn"
            >
              LI
            </a>
            <a
              href="https://instagram.com/rohitt.pandey"
              target="_blank"
              rel="noreferrer"
              className="social-dot hover-target"
              title="Instagram"
            >
              IG
            </a>
          </div>
        </div>

        {/* RIGHT: Photo */}
        <div className="hero-photo-wrap">
          <div className="photo-ring1" />
          <div className="photo-ring2" />
          <div className="photo-card">
            <img
              src="public\images\ProfilePhoto.jpeg"
              alt="Rohit Kumar Pandey"
              className="hero-photo"
              onError={(e) => {
                e.target.src =
                  "https://ui-avatars.com/api/?name=Rohit+Kumar+Pandey&size=400&background=030508&color=00ff87&bold=true&font-size=0.35";
              }}
            />
            <div className="photo-overlay" />
          </div>
          {/* Floating badges */}
          <div className="float-badge badge-java">☕ Java</div>
          <div className="float-badge badge-react">⚛️ React</div>
          <div className="float-badge badge-spring">🍃 Spring Boot</div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  );
}
