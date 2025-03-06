const express = require('express');
const routes = require('./routes/globalRoutes'); 
const connectDB = require('./queries/db'); 
const sequelize = require('./config/db'); // Import Sequelize
require('dotenv').config(); 

const app = express();
app.use(express.json());

routes(app);

// Ensure the database is synced (creates tables if they don't exist)
connectDB();

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
