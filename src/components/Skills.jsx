import './Skills.css'

const skills = [
  { icon: '☕', name: 'Java', level: 85 },
  { icon: '🍃', name: 'Spring Boot', level: 80 },
  { icon: '⚛️', name: 'React', level: 75 },
  { icon: '🟨', name: 'JavaScript', level: 78 },
  { icon: '🎨', name: 'HTML / CSS', level: 85 },
  { icon: '🗄️', name: 'MySQL', level: 80 },
  { icon: '🔗', name: 'REST API', level: 82 },
  { icon: '🌐', name: 'Web Dev', level: 80 },
  { icon: '🔧', name: 'Git', level: 75 },
  { icon: '🧩', name: 'DSA', level: 70 },
]

export default function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="skills-inner">
        <div className="sec-tag fade-up">What I Work With</div>
        <h2 className="sec-title fade-up">My Skills</h2>
        <div className="sec-line fade-up" />
        <div className="skills-grid">
          {skills.map((sk, i) => (
            <div className="sk-card fade-up hover-target" key={i} style={{ transitionDelay: `${i * 0.06}s` }}>
              <div className="sk-glow" />
              <span className="sk-icon">{sk.icon}</span>
              <span className="sk-name">{sk.name}</span>
              <div className="sk-bar-wrap">
                <div className="sk-bar" style={{ '--w': sk.level + '%' }} />
              </div>
              <span className="sk-pct">{sk.level}%</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
