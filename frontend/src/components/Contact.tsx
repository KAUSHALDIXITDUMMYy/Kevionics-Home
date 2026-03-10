import { useState } from 'react'
import './Contact.css'

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle')
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (res.ok) {
        setStatus('done')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="contact">
      <h2 className="section-title">Get in Touch</h2>
      <div className="contact__wrap">
        <p className="contact__intro">
          Have a project in mind or want to learn more? We&apos;d love to hear from you.
        </p>
        <form className="contact__form" onSubmit={handleSubmit}>
          <label className="contact__label">
            <span>Name</span>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={(e) => setFormData((d) => ({ ...d, name: e.target.value }))}
              className="contact__input"
              placeholder="Your name"
            />
          </label>
          <label className="contact__label">
            <span>Email</span>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={(e) => setFormData((d) => ({ ...d, email: e.target.value }))}
              className="contact__input"
              placeholder="you@example.com"
            />
          </label>
          <label className="contact__label">
            <span>Message</span>
            <textarea
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData((d) => ({ ...d, message: e.target.value }))}
              className="contact__input contact__textarea"
              placeholder="Tell us about your project..."
            />
          </label>
          <button type="submit" className="btn btn--primary contact__submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>
          {status === 'done' && <p className="contact__feedback contact__feedback--success">Message sent. We&apos;ll be in touch.</p>}
          {status === 'error' && <p className="contact__feedback contact__feedback--error">Something went wrong. Please try again.</p>}
        </form>
      </div>
    </section>
  )
}
