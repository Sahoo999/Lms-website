import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from '../configs/mongodb.js';
import { clerkWebhooks } from '../controllers/webhooks.js';

const app = express();

// Connect to DB
await connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => res.send("API Working"));
app.post('/clerk', clerkWebhooks);

// Export as handler
export default app;
