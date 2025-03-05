const sequelize = require('../config/db'); // Importer l'instance de Sequelize

async function connectDB() {
  try {
    await sequelize.authenticate();
    console.log('✅ Connexion à PostgreSQL réussie.');
  } catch (error) {
    console.error('❌ Erreur de connexion à PostgreSQL :', error);
  }
}

module.exports = connectDB;
