import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import './Navbar.css'

const links = ['home','about','education','skills','projects','contact']

export default function Navbar({ activeSection }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-logo">RKP</div>
      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        {links.map(l => (
          <li key={l}>
            <Link
              to={l} spy smooth duration={600} offset={-80}
              className={`nav-link ${activeSection === l ? 'active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {l.charAt(0).toUpperCase() + l.slice(1)}
            </Link>
          </li>
        ))}
      </ul>
      <Link to="contact" spy smooth duration={600} offset={-80} className="nav-cta hover-target">
        Hire Me
      </Link>
      <button className="hamburger hover-target" onClick={() => setMenuOpen(!menuOpen)}>
        <span /><span /><span />
      </button>
    </nav>
  )
}
