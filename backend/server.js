// server.js

require('dotenv').config();           
const app = require('./app');         
const sequelize = require('./config/db'); 
const connectDB = require('./queries/db'); 

sequelize
  .sync({ alter: true }) 
  .then(() => console.log('📦 Database synced successfully'))
  .catch((err) => console.error('❌ Database sync error:', err));


connectDB();

// 5) Listen on the port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
