import { stripeWebhooks } from '../controllers/webhooks.js'; // Adjust path as needed

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }
  
  return stripeWebhooks(req, res);
}
// Important for Vercel to handle raw body
export const config = {
  api: {
    bodyParser: false,
  },
}