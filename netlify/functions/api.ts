import express, { Router } from 'express';
import serverless from 'serverless-http';

const app = express();
const router = Router();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Basic health check route
router.get('/', (req, res) => {
  res.json({ message: 'Healthcare API is running', status: 'ok' });
});

// Contact form endpoint (placeholder for future functionality)
router.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  
  // For now, just return success - can be extended with email service
  res.json({ 
    success: true, 
    message: 'Thank you for your message. We will get back to you soon!',
    data: { name, email }
  });
});

// Apply router to the /.netlify/functions/api path
app.use('/.netlify/functions/api', router);

// Export the handler for Netlify
export const handler = serverless(app);