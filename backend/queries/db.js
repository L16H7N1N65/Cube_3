const sequelize = require('../config/db'); // Importer l'instance de Sequelize
require('dotenv').config();

async function connectDB() {
  try {
    await sequelize.authenticate();
    console.log('✅ Connexion à PostgreSQL réussie.');

    // Utilise process.env pour accéder aux variables d'environnement
    console.log(`✅ Connexion à PostgreSQL AWS sur ${process.env.DB_HOST} avec le user ${process.env.DB_USER} sur la base ${process.env.DB_NAME} port : ${process.env.DB_PORT}`);
  } catch (error) {
    console.error('❌ Erreur de connexion à PostgreSQL :', error);
  }
}

module.exports = connectDB;
