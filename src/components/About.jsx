import { useInView } from 'react-intersection-observer'
import './About.css'

const stats = [
  { num: '2025', label: 'CSE Graduate' },
  { num: '10+', label: 'Technologies' },
  { num: '3+', label: 'Projects Built' },
  { num: '∞', label: 'Passion to Learn' },
]

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="about" className="section about-section" ref={ref}>
      <div className={`about-inner ${inView ? 'visible' : ''}`}>
        <div className="about-left fade-left">
          <div className="sec-tag">Who I Am</div>
          <h2 className="sec-title">About Me</h2>
          <div className="sec-line" />
          <p className="about-p">
            I am a <strong>Computer Science Engineering graduate (2025)</strong> with
            strong knowledge of Java, SQL, and web development. Passionate about
            building scalable backend applications using <strong>Spring Boot</strong> and
            working on full-stack development.
          </p>
          <p className="about-p">
            Currently improving my skills in <strong>Data Structures and Algorithms</strong>{' '}
            while building real-world projects. Actively seeking opportunities as a
            Java Developer or Full Stack Developer.
          </p>
          <p className="about-p">
            I enjoy solving problems, learning new technologies, and collaborating
            with teams to build impactful products.
          </p>
          <a href="#contact" className="btn-primary hover-target" style={{ marginTop: '.5rem' }}>
            Let's Work Together →
          </a>
        </div>

        <div className="about-right fade-up">
          <div className="stats-grid">
            {stats.map((s, i) => (
              <div className="stat-card hover-target" key={i} style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="stat-num">{s.num}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
