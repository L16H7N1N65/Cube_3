const express = require('express');
const router = express.Router();
const sequelize = require('../config/db'); // Importer la connexion à la base de données

// Route GET pour /api/hello
router.get('/hello', (req, res) => {
  res.status(200).json({ message: 'Hello to the Martin\'s API!' });
});

// Route GET pour /api
router.get('/', (req, res) => {
  res.status(200).json({ message: 'Nothing on /api. Try on API\'s status on /api/hello!' });
});

// Route GET pour /api/test-db
router.get('/test-db', (req, res) => {
  sequelize.authenticate()
    .then(() => {
      res.status(200).json({ message: '✅ Connexion réussie à PostgreSQL' });
    })
    .catch(err => {
      res.status(500).json({ message: '❌ Erreur de connexion à PostgreSQL', error: err.message });
    });
});
module.exports = router;


// Route pour tester la connexion à la base de données



