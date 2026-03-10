import './Features.css'

const features = [
  {
    title: 'Integrated Systems',
    description: 'Hardware and software designed to work as one. We deliver cohesive solutions that reduce complexity and increase reliability.',
    icon: '◈',
  },
  {
    title: 'Innovation Lab',
    description: 'Continuous R&D in embedded systems, IoT, and automation. We turn ideas into deployable technology.',
    icon: '◇',
  },
  {
    title: 'Enterprise Ready',
    description: 'Scalable architectures and security-first design for organizations that cannot afford downtime.',
    icon: '⬡',
  },
]

export function Features() {
  return (
    <section id="features" className="features">
      <h2 className="section-title">Our Solutions</h2>
      <div className="features__grid">
        {features.map((f) => (
          <article key={f.title} className="feature-card">
            <div className="feature-card__icon">{f.icon}</div>
            <h3 className="feature-card__title">{f.title}</h3>
            <p className="feature-card__desc">{f.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
