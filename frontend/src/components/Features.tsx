import './Features.css'

const features = [
  {
    title: 'Software development',
    description:
      'Custom applications and platforms built for reliability, security, and scale — from architecture to deployment.',
    icon: '</>',
  },
  {
    title: 'Web & mobile solutions',
    description:
      'Responsive web experiences and mobile apps that perform beautifully across devices and networks.',
    icon: '☁',
  },
  {
    title: 'UI/UX design',
    description:
      'Clear interfaces and flows that align with your brand and help users get things done with confidence.',
    icon: '◆',
  },
  {
    title: 'IT consulting & support',
    description:
      'Strategic guidance and dependable maintenance so your technology keeps delivering long after launch.',
    icon: '⚙',
  },
]

export function Features() {
  return (
    <section id="features" className="features">
      <h2 className="section-title">Our services</h2>
      <div className="features__grid">
        {features.map((f) => (
          <article key={f.title} className="feature-card">
            <div className="feature-card__icon-wrap" aria-hidden="true">
              <span className="feature-card__icon">{f.icon}</span>
            </div>
            <h3 className="feature-card__title">{f.title}</h3>
            <p className="feature-card__desc">{f.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
