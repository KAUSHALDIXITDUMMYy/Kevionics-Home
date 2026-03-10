import express from 'express'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT ?? 3001

app.use(cors({ origin: true }))
app.use(express.json())

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', message: 'KEVIONICS API' })
})

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body ?? {}
  if (!name || !email || !message) {
    res.status(400).json({ error: 'Name, email, and message are required' })
    return
  }
  // In production: validate email, sanitize, send to mail service or store in DB
  console.log('Contact form:', { name, email, message: message.slice(0, 50) + '...' })
  res.status(200).json({ success: true, message: 'Thank you. We will be in touch.' })
})

app.listen(PORT, () => {
  console.log(`KEVIONICS API running at http://localhost:${PORT}`)
})
