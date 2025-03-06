const express = require('express');
const routes = require('./routes/globalRoutes'); 
const connectDB = require('./queries/db'); 
const sequelize = require('./config/db'); // Import Sequelize
require('dotenv').config(); 

const app = express();
app.use(express.json());

routes(app);

// Ensure the database is synced (creates tables if they don't exist)
sequelize.sync({ alter: true }) // Change to `{ force: true }` if you want to reset the DB on every start
  .then(() => console.log('📦 Database synced successfully'))
  .catch((err) => console.error('❌ Database sync error:', err));

connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
