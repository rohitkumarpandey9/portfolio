import { useEffect, useRef, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ParticlesBg from './components/ParticlesBg'

function App() {
  const cursorRef = useRef(null)
  const ringRef = useRef(null)
  const [activeSection, setActiveSection] = useState('home')
  let rx = 0, ry = 0

  useEffect(() => {
    const cursor = cursorRef.current
    const ring = ringRef.current
    let mx = 0, my = 0

    const onMove = (e) => {
      mx = e.clientX; my = e.clientY
      cursor.style.left = mx + 'px'
      cursor.style.top = my + 'px'
    }

    const loop = () => {
      rx += (mx - rx) * 0.12
      ry += (my - ry) * 0.12
      ring.style.left = rx + 'px'
      ring.style.top = ry + 'px'
      requestAnimationFrame(loop)
    }

    document.addEventListener('mousemove', onMove)
    loop()

    const hoverEls = document.querySelectorAll('a, button, .hover-target')
    hoverEls.forEach(el => {
      el.addEventListener('mouseenter', () => { cursor.classList.add('hovering'); ring.classList.add('hovering') })
      el.addEventListener('mouseleave', () => { cursor.classList.remove('hovering'); ring.classList.remove('hovering') })
    })

    // Scroll reveal
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') })
    }, { threshold: 0.12 })
    document.querySelectorAll('.fade-up, .fade-left').forEach(el => obs.observe(el))

    // Active section tracker
    const secObs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id) })
    }, { threshold: 0.5 })
    document.querySelectorAll('section[id]').forEach(el => secObs.observe(el))

    return () => document.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <>
      <div className="cursor" ref={cursorRef} />
      <div className="cursor-ring" ref={ringRef} />
      <ParticlesBg />
      <Navbar activeSection={activeSection} />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
