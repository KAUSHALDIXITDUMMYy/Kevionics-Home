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
        <a href="#hero" className="nav__logo" aria-label="KEVIONICS — home">
          <img
            src="/logo.svg"
            alt=""
            width={44}
            height={44}
            className="nav__logo-img"
            decoding="async"
            onError={(e) => {
              e.currentTarget.style.display = 'none'
            }}
          />
          <span className="nav__logo-wordmark">KEVIONICS</span>
        </a>
        <div className="nav__aside">
          <nav className={`nav__links ${mobileOpen ? 'nav__links--open' : ''}`} id="nav-menu">
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
          <button
            type="button"
            className="nav__toggle"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            aria-controls="nav-menu"
            onClick={() => setMobileOpen((o) => !o)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}
