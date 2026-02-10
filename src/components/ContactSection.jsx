import React from "react";
import "../styles/ContactSection.css";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaTwitter,
  FaPhone,
} from "react-icons/fa";

function ContactSection() {
  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Get in Touch</h2>
      <p className="contact-subtitle">
        I'm always open to discussing new projects or opportunities. Feel free
        to contact me!
      </p>

      <div className="contact-container">
        {/* Contact Form */}
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit" className="btn contact-btn">
            Send Message
          </button>
        </form>

        {/* Social Links with Icons */}
        <div className="contact-social">
          <h3>Connect with me</h3>
          <div className="social-icons">
            <a
              href="https://github.com/rohitkumarpandey9"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub /> GitHub
            </a>
            <a
              href="https://linkedin.com/in/rohitkumarpandey3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin /> LinkedIn
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&to=rohitt.pandey045@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope /> Email
            </a>
            <a href="tel:+919876543210">
              <FaPhone /> +91 9162299911
            </a>
            <a
              href="https://twitter.com/Er_Rohitpandey"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter /> Twitter
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
