const sequelize = require('../config/db');

async function connectDB() {
  try {
    await sequelize.authenticate();
    console.log('✅ Connexion à PostgreSQL réussie.');
  } catch (error) {
    console.error('❌ Erreur de connexion à PostgreSQL :', error);
  }

  await sequelize.sync()
  .then(() => console.log('📦 Database synced successfully'))
  .catch((err) => console.error('❌ Database sync error:', err));
}

module.exports = connectDB;
