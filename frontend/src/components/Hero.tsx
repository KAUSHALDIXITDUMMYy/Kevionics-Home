import { useEffect, useRef } from 'react'
import './Hero.css'

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const count = reducedMotion ? 28 : 52
    const linkDistance = reducedMotion ? 0 : Math.min(140, canvas.width * 0.12)

    type Particle = { x: number; y: number; vx: number; vy: number; size: number }
    const particles: Particle[] = []
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * (reducedMotion ? 0.12 : 0.42),
        vy: (Math.random() - 0.5) * (reducedMotion ? 0.12 : 0.42),
        size: Math.random() * 1.35 + 0.45,
      })
    }

    let frame = 0
    let raf = 0
    const animate = () => {
      frame++
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1
      }

      if (linkDistance > 0) {
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const a = particles[i]
            const b = particles[j]
            const dx = a.x - b.x
            const dy = a.y - b.y
            const d = Math.hypot(dx, dy)
            if (d < linkDistance && d > 0) {
              const t = 1 - d / linkDistance
              const pulse = 0.55 + 0.45 * Math.sin(frame * 0.018 + (a.x + b.y) * 0.002)
              ctx.strokeStyle = `rgba(96, 165, 250, ${0.12 * t * pulse})`
              ctx.lineWidth = 0.6 + 0.4 * t
              ctx.beginPath()
              ctx.moveTo(a.x, a.y)
              ctx.lineTo(b.x, b.y)
              ctx.stroke()
            }
          }
        }
      }

      particles.forEach((p) => {
        const alpha = 0.38 + 0.32 * Math.sin(frame * 0.016 + p.x * 0.008)
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(56, 189, 248, ${alpha})`
        ctx.fill()
      })

      raf = requestAnimationFrame(animate)
    }

    if (!reducedMotion) {
      animate()
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p) => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(56, 189, 248, 0.38)'
        ctx.fill()
      })
    }

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <section id="hero" className="hero">
      <canvas ref={canvasRef} className="hero__canvas" aria-hidden="true" />
      <div className="hero__content">
        <div className="hero__logo-wrap">
          <img
            src="/logo.svg"
            alt="KEVIONICS"
            className="hero__logo-img"
            onError={(e) => {
              const target = e.currentTarget
              target.style.display = 'none'
              const fallback = target.nextElementSibling
              if (fallback) (fallback as HTMLElement).style.display = 'block'
            }}
          />
          <div className="hero__logo-fallback" style={{ display: 'none' }}>
            <span className="hero__logo-k">K</span>
            <span className="hero__logo-ring" />
          </div>
        </div>
        <h1 className="hero__title">KEVIONICS</h1>
        <p className="hero__tagline">Innovate • Build • Grow</p>
        <p className="hero__desc">
          We code your <span className="hero__accent">vision</span>, we build your{' '}
          <span className="hero__accent">success</span>. Smart solutions for a stronger tomorrow.
        </p>
        <div className="hero__cta">
          <a href="#about" className="btn btn--primary">
            Discover More
          </a>
          <a href="#contact" className="btn btn--outline">
            Get in Touch
          </a>
        </div>
      </div>
      <div className="hero__scroll" aria-hidden="true">
        <span />
      </div>
    </section>
  )
}
