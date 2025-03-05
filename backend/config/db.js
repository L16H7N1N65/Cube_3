const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config(); // Charger les variables d'environnement

const sequelize = new Sequelize(
  process.env.DB_NAME, // Nom de la base de données
  process.env.DB_USER, // Utilisateur
  process.env.DB_PASSWORD, // Mot de passe
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres', // Utilisation de PostgreSQL
    logging: false, // Désactiver les logs SQL dans la console
  }
);

// Vérifier la connexion à la base de données
sequelize.authenticate()
  .then(() => console.log('✅ Connexion réussie à PostgreSQL'))
  .catch(err => console.error('❌ Erreur de connexion à PostgreSQL:', err));

  module.exports = { sequelize, DataTypes };
