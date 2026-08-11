const express = require('express');
const cors = require('cors');
const config = require('./config/env');
const connectDatabase = require('./config/database');
const errorHandler = require('./middleware/errorHandler');

const app = express();

// Connect to MongoDB
connectDatabase();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS Configuration
const corsOptions = {
  origin: config.nodeEnv === 'development' 
    ? '*'  // Allow any origin in development
    : config.frontendUrl,  // Restrict to specific URL in production
  credentials: true,  // Important for HttpOnly cookies
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: 'Metriva API is running',
    environment: config.nodeEnv,
    timestamp: new Date().toISOString()
  });
});

// Error handling middleware (should be last)
app.use(errorHandler);

// Start server
const PORT = config.port;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Environment: ${config.nodeEnv}`);
  console.log(`Frontend URL: ${config.frontendUrl}`);
});

module.exports = app;
