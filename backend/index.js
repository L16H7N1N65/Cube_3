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

app.listen(process.env.SERVER_PORT, () => {
  console.log(`🚀 Server running on http://localhost:${process.env.SERVER_PORT}`);
});
