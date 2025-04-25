import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from '../configs/mongodb.js'
import { clerkWebhooks } from '../controllers/webhooks.js'
import serverless from 'serverless-http'

const app = express()

// Connect to MongoDB (only once per cold start)
await connectDB()

// Middlewares
app.use(cors())
app.use(express.json())

// Routes
app.get('/api', (req, res) => res.send("API Working"))
app.post('/api/clerk', clerkWebhooks)

// Export serverless handler
export const handler = serverless(app)
