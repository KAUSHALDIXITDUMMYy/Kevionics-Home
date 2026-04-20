import { useEffect, useRef } from 'react'
import './Hero.css'

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const particles: { x: number; y: number; vx: number; vy: number; size: number }[] = []
    const count = 60
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 1.5 + 0.5,
      })
    }

    let frame = 0
    const animate = () => {
      frame++
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1
        const alpha = 0.4 + 0.3 * Math.sin((frame * 0.02 + p.x * 0.01))
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(74, 159, 232, ${alpha})`
        ctx.fill()
      })
      requestAnimationFrame(animate)
    }
    animate()

    return () => window.removeEventListener('resize', resize)
  }, [])

  return (
    <section id="hero" className="hero">
      <canvas ref={canvasRef} className="hero__canvas" aria-hidden="true" />
      <div className="hero__content">
        <div className="hero__logo-wrap">
          <img
            src="/logo.png"
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
