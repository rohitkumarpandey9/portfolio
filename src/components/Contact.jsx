import { useState } from "react";
import "./Contact.css";

const socials = [
  {
    icon: "✉️",
    label: "Email",
    value: "rohitt.pandey045@gmail.com",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=rohitt.pandey045@gmail.com",
    sub: "Drop me a mail",
  },
  {
    icon: "📱",
    label: "Phone",
    value: "+91 9162299911",
    href: "tel:+919162299911",
    sub: "Call anytime",
  },
  {
    icon: "💼",
    label: "LinkedIn",
    value: "Rohit Kumar Pandey",
    href: "https://linkedin.com/in/rohitkumarpandey3",
    sub: "LinkedIn Profile",
  },
  {
    icon: "💻",
    label: "GitHub",
    value: "Rohit Kumar Pandey",
    href: "https://github.com/rohitkumarpandey9",
    sub: "GitHub Profile",
  },
  {
    icon: "📸",
    label: "Instagram",
    value: "@rohitt.pandey",
    href: "https://instagram.com/rohitt.pandey",
    sub: "Follow me",
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="contact-inner">
        <div className="sec-tag fade-up">Get In Touch</div>
        <h2 className="sec-title fade-up">Contact Me</h2>
        <div className="sec-line fade-up" />

        <div className="contact-layout">
          <div className="contact-left fade-left">
            <p className="contact-desc">
              I'm currently open to new opportunities as a{" "}
              <strong>Java Developer</strong> or{" "}
              <strong>Full Stack Developer</strong>. Whether you have a project,
              job offer, or just want to say hi — feel free to reach out!
            </p>
            <div className="socials-list">
              {socials.map((s, i) => (
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  key={i}
                  className="social-item hover-target"
                >
                  <div className="si-icon">{s.icon}</div>
                  <div className="si-text">
                    <div className="si-val">{s.value}</div>
                    <div className="si-sub">{s.sub}</div>
                  </div>
                  <div className="si-arrow">→</div>
                </a>
              ))}
            </div>
          </div>

          <div className="contact-right fade-up">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Your Name</label>
                  <input
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label>Subject</label>
                <input
                  name="subject"
                  type="text"
                  placeholder="Job Opportunity / Collaboration"
                  value={form.subject}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea
                  name="message"
                  placeholder="Hi Rohit, I'd like to discuss..."
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                />
              </div>
              <button
                type="submit"
                className="btn-primary hover-target"
                style={{
                  width: "100%",
                  justifyContent: "center",
                  padding: "1rem",
                }}
              >
                Send Message →
              </button>
              {sent && (
                <p className="form-success">
                  ✅ Message sent! I'll get back to you soon.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
