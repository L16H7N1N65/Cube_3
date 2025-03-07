// server.js
const app = require('./app');
const sequelize = require('./config/db');

sequelize
  .sync({ force: false }) 
  .then(() => console.log('📦 Database synced successfully'))
  .catch((err) => console.error('❌ Database sync error:', err));

// Finally, start listening on the port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
