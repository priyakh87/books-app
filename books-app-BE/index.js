const express = require('express');
const cors = require('cors'); // Import CORS
const { Sequelize } = require('sequelize');
const models = require('./models');
const app = express();
const booksRoutes = require('./routes/books');
const PORT = process.env.PORT || 4000;
app.use(cors());
app.use(express.json());// middleware tp parse JSON

// Sync models with the db
models.sequelize.sync();
// Set up a new instance of Sequelize with PostgreSQL
const sequelize = new Sequelize('postgres', 'priyakhanna', 'root', {
    host: '127.0.0.1',
    dialect: 'postgres'
  });
app.get('/', (req, res) => {
    res.send('API is running');
});


app.use('/api/books', booksRoutes);

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
    
})
