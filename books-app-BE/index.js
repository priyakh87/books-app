const express = require('express');
const cors = require('cors');
const { Sequelize } = require('sequelize');
const models = require('./models');  // Using models/index.js
const booksRoutes = require('./routes/books');
const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());  // Middleware to parse JSON

// Sync models with the database (using models/index.js setup)
models.sequelize.sync().then(() => {
  console.log("Database synced successfully");
}).catch(err => {
  console.error("Error syncing database:", err);
});

// Set up the API routes
app.use('/api/books', booksRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});