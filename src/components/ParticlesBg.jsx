import { useCallback } from 'react'
import Particles from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'

export default function ParticlesBg() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine)
  }, [])

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}
      options={{
        background: { color: { value: 'transparent' } },
        fpsLimit: 60,
        particles: {
          number: { value: 60, density: { enable: true, area: 900 } },
          color: { value: ['#00ff87', '#60efff', '#ffffff'] },
          opacity: { value: { min: 0.05, max: 0.25 }, animation: { enable: true, speed: 0.8 } },
          size: { value: { min: 0.5, max: 2 } },
          move: {
            enable: true, speed: 0.4,
            direction: 'none', random: true,
            straight: false, outModes: 'out'
          },
          links: {
            enable: true, distance: 130,
            color: '#00ff87', opacity: 0.06, width: 1
          }
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: 'grab' },
            onClick: { enable: false }
          },
          modes: { grab: { distance: 140, links: { opacity: 0.2 } } }
        },
        detectRetina: true
      }}
    />
  )
}
