import { useState, useEffect } from 'react'
import './Nav.css'

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#hero', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#features', label: 'Services' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''} ${mobileOpen ? 'nav--menu-open' : ''}`}>
      <div className="nav__inner">
        <a href="#hero" className="nav__logo">
          <span className="nav__logo-text">KEVIONICS</span>
        </a>
        <button
          type="button"
          className="nav__toggle"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav className={`nav__links ${mobileOpen ? 'nav__links--open' : ''}`}>
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="nav__link"
              onClick={() => setMobileOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
