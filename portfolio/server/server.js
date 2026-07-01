import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  subject: String,
  message: String,
  createdAt: { type: Date, default: Date.now },
})

const Contact = mongoose.model('Contact', contactSchema)

const memoryContacts = []
let useMemoryStore = false

const isPlaceholderMongoUri = (uri) =>
  !uri ||
  uri.includes('YOUR_USER') ||
  uri.includes('YOUR_PASSWORD') ||
  uri.includes('xxxxx')

const saveContact = async (data) => {
  if (useMemoryStore) {
    memoryContacts.push({ ...data, createdAt: new Date() })
    return
  }
  await Contact.create(data)
}

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'All fields required' })
    }
    await saveContact({ name, email, subject, message })
    res.status(201).json({ success: true })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Server error' })
  }
})

app.get('/api/health', (_, res) =>
  res.json({ ok: true, storage: useMemoryStore ? 'memory' : 'mongodb' })
)

const PORT = process.env.PORT || 5000

const startServer = () => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
    if (useMemoryStore) {
      console.log('Using in-memory contact storage (set MONGODB_URI in .env for persistence)')
    }
  })
}

const connectDatabase = async () => {
  const uri = process.env.MONGODB_URI

  if (isPlaceholderMongoUri(uri)) {
    useMemoryStore = true
    console.warn('MONGODB_URI not configured — using in-memory contact storage')
    startServer()
    return
  }

  try {
    await mongoose.connect(uri)
    console.log('Connected to MongoDB')
    startServer()
  } catch (err) {
    console.error('MongoDB connection error:', err.message)
    useMemoryStore = true
    console.warn('Falling back to in-memory contact storage')
    startServer()
  }
}

connectDatabase()
