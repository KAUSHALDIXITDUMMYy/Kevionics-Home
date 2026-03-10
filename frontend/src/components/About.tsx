import './About.css'

export function About() {
  return (
    <section id="about" className="about">
      <h2 className="section-title">About Us</h2>
      <div className="about__grid">
        <div className="about__content">
          <p className="about__lead">
            KEVIONICS is at the forefront of technological innovation, combining precision engineering with cutting-edge software to deliver solutions that drive the future.
          </p>
          <p className="about__text">
            Our team specializes in integrated systems, embedded technology, and scalable platforms that empower businesses and institutions to operate smarter and faster. From concept to deployment, we focus on reliability, performance, and long-term value.
          </p>
          <ul className="about__list">
            <li>Research-driven development</li>
            <li>End-to-end system design</li>
            <li>Scalable, secure architectures</li>
          </ul>
        </div>
        <div className="about__visual">
          <div className="about__hex" />
          <div className="about__circuit" aria-hidden="true">
            <svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 60h40M60 60v-30M60 30h60M120 30v60M120 90H60M60 90v-20M60 70h40" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" />
              <circle cx="20" cy="60" r="3" fill="var(--gold)" opacity="0.6" />
              <circle cx="60" cy="60" r="3" fill="var(--gold)" opacity="0.6" />
              <circle cx="60" cy="30" r="3" fill="var(--gold)" opacity="0.6" />
              <circle cx="120" cy="30" r="3" fill="var(--gold)" opacity="0.6" />
              <circle cx="120" cy="90" r="3" fill="var(--gold)" opacity="0.6" />
              <circle cx="60" cy="90" r="3" fill="var(--gold)" opacity="0.6" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
