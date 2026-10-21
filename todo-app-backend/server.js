const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const todoRoutes = require('./routes/todoRoutes');
const teamRoutes = require('./routes/teamRoutes');
dotenv.config();

const connectDB = require('./config/db');

connectDB();

const app = express();

const allowedOrigins = [
  'http://localhost:4200',
  'https://team-tasker-wrmi.vercel.app',
  'https://team-tasker-ashen.vercel.app'
];

if (process.env.FRONTEND_URL) {
  const envUrl = process.env.FRONTEND_URL.trim().replace(/\/$/, '');
  if (envUrl) {
    allowedOrigins.push(envUrl);
  }
}

app.use(cors({
  origin: (origin, callback) => {
    // Allow non-browser requests (like curl, postman, serverless internal)
    if (!origin) return callback(null, true);
    // Allow vercel preview / production domains and localhost
    if (
      origin.endsWith('.vercel.app') ||
      origin.startsWith('http://localhost:') ||
      origin.startsWith('http://127.0.0.1:') ||
      allowedOrigins.includes(origin)
    ) {
      return callback(null, true);
    }
    // Fallback: allow origin for public demo
    return callback(null, true);
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
}));

app.use(express.json());

// Ensure DB is connected before processing requests
app.use(async (req, res, next) => {
  try {
    await connectDB();
  } catch (err) {
    console.error('Database connection middleware error:', err);
  }
  next();
});

app.use('/api/todos', todoRoutes);
app.use('/api/teams', teamRoutes);

app.get('/', (req, res) => {
  res.send('API Running');
});

const PORT = process.env.PORT || 3000;

if (process.env.NODE_ENV !== 'production' || !process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;
