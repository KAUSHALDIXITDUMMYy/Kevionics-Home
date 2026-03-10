import './Footer.css'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <span className="footer__logo">KEVIONICS</span>
          <p className="footer__tagline">Innovation in Technology</p>
        </div>
        <div className="footer__links">
          <a href="#hero">Home</a>
          <a href="#about">About</a>
          <a href="#features">Solutions</a>
          <a href="#contact">Contact</a>
        </div>
        <p className="footer__copy">
          © {year} KEVIONICS. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
