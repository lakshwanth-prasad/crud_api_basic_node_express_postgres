// index.js
const express = require('express');
const bodyParser = require('body-parser');
const { errorHandler } = require('./utils/errorHandler');
const { setupDatabase } = require('./config/database');
const { setupExpress } = require('./config/express');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Setup Database
setupDatabase();

// Setup Express
setupExpress(app);

// Routes
app.use('/api/users', userRoutes);

// Error Handling Middleware
app.use(errorHandler);

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
